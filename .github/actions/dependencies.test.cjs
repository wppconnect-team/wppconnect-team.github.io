const assert = require('node:assert/strict');
const { once } = require('node:events');
const http = require('node:http');
const { createRequire } = require('node:module');
const { test } = require('node:test');

async function listen(t, server) {
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => new Promise((resolve) => {
    server.closeAllConnections();
    server.close(resolve);
  }));
  return `http://127.0.0.1:${server.address().port}/`;
}

test('Docusaurus package lookup works with its declared Got dependency', async (t) => {
  const coreRequire = createRequire(require.resolve('@docusaurus/core/package.json'));
  const notifierRequire = createRequire(coreRequire.resolve('update-notifier'));
  const latestRequire = createRequire(notifierRequire.resolve('latest-version'));
  const { default: packageJson, PackageNotFoundError } = await import(
    require('node:url').pathToFileURL(latestRequire.resolve('package-json')).href
  );
  const registryUrl = await listen(t, http.createServer((request, response) => {
    if (request.url !== '/workflow-test') {
      response.writeHead(404);
      response.end();
      return;
    }
    response.setHeader('content-type', 'application/json');
    response.end(JSON.stringify({
      'dist-tags': { latest: '1.2.3' },
      versions: { '1.2.3': { name: 'workflow-test', version: '1.2.3' } },
    }));
  }));
  const metadata = await packageJson('workflow-test', { registryUrl });
  assert.equal(metadata.version, '1.2.3');
  await assert.rejects(packageJson('missing', { registryUrl }), PackageNotFoundError);
});

test('local search Cheerio loads HTML through Undici 8', async (t) => {
  const searchRequire = createRequire(require.resolve('@easyops-cn/docusaurus-search-local'));
  const cheerio = searchRequire('cheerio');
  const url = await listen(t, http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html; charset=utf-8');
    response.end('<html><body><h1>Search integration</h1></body></html>');
  }));
  const $ = await cheerio.fromURL(url);
  assert.equal($('h1').text(), 'Search integration');
});

test('SockJS opens a session and echoes messages with UUID 14', async (t) => {
  const coreRequire = createRequire(require.resolve('@docusaurus/core/package.json'));
  const webpackRequire = createRequire(coreRequire.resolve('webpack-dev-server'));
  const sockjs = webpackRequire('sockjs');
  const server = http.createServer();
  const transport = sockjs.createServer({ log() {} });
  transport.on('connection', (connection) => {
    assert.match(connection.id, /^[0-9a-f-]{36}$/);
    connection.on('data', (message) => connection.write(message));
  });
  transport.installHandlers(server, { prefix: '/sockjs' });
  const url = await listen(t, server);
  const socket = new WebSocket(url.replace('http:', 'ws:') + 'sockjs/000/test/websocket');
  try {
    const [opened] = await once(socket, 'message');
    assert.equal(opened.data, 'o');
    const echoed = once(socket, 'message');
    socket.send(JSON.stringify(['dependency-check']));
    const [message] = await echoed;
    assert.equal(message.data, 'a["dependency-check"]');
  } finally {
    const closed = once(socket, 'close');
    socket.close();
    await closed;
  }
});
