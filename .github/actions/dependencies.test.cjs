const assert = require('node:assert/strict');
const { once } = require('node:events');
const http = require('node:http');
const { createRequire } = require('node:module');
const { mkdtempSync, mkdirSync, rmSync, writeFileSync } = require('node:fs');
const { tmpdir } = require('node:os');
const path = require('node:path');
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

function workboxOwner() {
  const pwa = createRequire(require.resolve('@docusaurus/plugin-pwa'));
  return createRequire(pwa.resolve('workbox-build'));
}

test('the packed minimatch adapter preserves CommonJS and ES module entry points', async () => {
  const fs = require('node:fs');
  const adapter = require('minimatch');
  assert.equal(adapter, require('minimatch-upstream').minimatch);
  assert.equal(adapter('docs/guide.html', '**/*.html'), true);
  const esm = await import('minimatch');
  const upstream = await import('minimatch-upstream');
  assert.equal(esm.Minimatch, upstream.Minimatch);
  assert.equal(esm.minimatch('docs/guide.html', '**/*.html'), true);
  const installed = path.dirname(require.resolve('minimatch'));
  for (const file of ['index.cjs', 'index.mjs']) {
    const actual = fs.readFileSync(path.join(installed, file), 'utf8').replace(/\r\n/g, '\n');
    const expected = fs.readFileSync(path.join(__dirname, '../../vendor/minimatch-compat', file), 'utf8')
      .replace(/\r\n/g, '\n');
    assert.equal(actual, expected);
  }
});

test('PWA glob matcher bounds globparts amplification', () => {
  const workbox = workboxOwner();
  const glob = createRequire(workbox.resolve('glob'));
  const { Minimatch } = glob('minimatch');
  const matcher = new Minimatch(Array(8).fill('**/../a/b').join('/'), {
    optimizationLevel: 2,
    braceExpandMax: 16,
  });
  assert.equal(matcher.set.length, 16);
});

test('Docusaurus static server applies glob-based headers', async (t) => {
  const core = createRequire(require.resolve('@docusaurus/core/package.json'));
  const handler = core('serve-handler');
  const root = mkdtempSync(path.join(tmpdir(), 'serve-glob-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  writeFileSync(path.join(root, 'guide.html'), '<title>Glob fixture</title>');
  const url = await listen(t, http.createServer((request, response) => handler(request, response, {
    public: root,
    cleanUrls: false,
    headers: [{ source: '**/*.html', headers: [{ key: 'X-Glob-Test', value: 'matched' }] }],
  })));
  const response = await fetch(url + 'guide.html');
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('x-glob-test'), 'matched');
  assert.match(await response.text(), /Glob fixture/);
});

test('Redocly matches configured headers when fetching remote schemas', async (t) => {
  const plugin = createRequire(require.resolve('docusaurus-plugin-redoc'));
  const redocly = createRequire(plugin.resolve('@redocly/openapi-core'));
  const { readFileFromUrl } = redocly('./utils');
  let receivedHeader;
  const url = await listen(t, http.createServer((request, response) => {
    receivedHeader = request.headers['x-schema-token'];
    response.setHeader('content-type', 'application/json');
    response.end('{"openapi":"3.0.0"}');
  }));
  const schema = await readFileFromUrl(url + 'openapi.json', {
    headers: [{ matches: url + '*.json', name: 'X-Schema-Token', value: 'fixture' }],
  });
  assert.equal(receivedHeader, 'fixture');
  assert.equal(JSON.parse(schema.body).openapi, '3.0.0');
});

test('PWA FileList selects files with its minimatch dependency', (t) => {
  const workbox = workboxOwner();
  const plugin = createRequire(workbox.resolve('@trickfilm400/rollup-plugin-off-main-thread'));
  const ejs = createRequire(plugin.resolve('ejs'));
  const jake = createRequire(ejs.resolve('jake'));
  const { FileList } = jake('filelist');
  const root = mkdtempSync(path.join(tmpdir(), 'filelist-glob-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  writeFileSync(path.join(root, 'include.txt'), 'included');
  writeFileSync(path.join(root, 'exclude.json'), '{}');
  const previousDirectory = process.cwd();
  try {
    process.chdir(root);
    assert.deepEqual(new FileList('*.txt').toArray(), ['include.txt']);
  } finally {
    process.chdir(previousDirectory);
  }
});

test('CSS module Stylus resolves wildcard imports through patched Glob', async (t) => {
  const css = createRequire(require.resolve('typescript-plugin-css-modules'));
  const stylus = css('stylus');
  const root = mkdtempSync(path.join(tmpdir(), 'stylus-glob-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(path.join(root, 'parts'));
  writeFileSync(path.join(root, 'parts', 'fixture.styl'), '.fixture\n  color red\n');
  const output = await new Promise((resolve, reject) => {
    stylus('@import "parts/*.styl"')
      .set('filename', path.join(root, 'main.styl'))
      .render((error, result) => error ? reject(error) : resolve(result));
  });
  assert.match(output, /\.fixture/);
  assert.match(output, /color: #f00/);
});

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

function buildMergerOwners() {
  const classic = createRequire(require.resolve('@docusaurus/preset-classic'));
  const webpack = createRequire(classic.resolve('@svgr/webpack'));
  const svg = createRequire(webpack.resolve('@svgr/plugin-svgo'));
  const pwa = createRequire(require.resolve('@docusaurus/plugin-pwa'));
  const workbox = createRequire(pwa.resolve('workbox-build'));
  const rollup = createRequire(workbox.resolve('@rollup/plugin-node-resolve'));
  return [['SVG optimizer', svg], ['PWA bundler', rollup]];
}

for (const [label, owner] of buildMergerOwners()) {
  const merge = owner('deepmerge');
  const malicious = () => JSON.parse('{"__proto__":{"wppBuildPolluted":true}}');
  function assertSafe(value) {
    assert.equal(Object.getPrototypeOf(value), Object.prototype);
    assert.equal(value.wppBuildPolluted, undefined);
    assert.equal(Object.hasOwn(value, '__proto__'), false);
    assert.equal({}.wppBuildPolluted, undefined);
  }

  test(`${label} rejects prototype keys with a null-prototype target`, () => {
    const target = Object.assign(Object.create(null), { enabled: true });
    const result = merge(target, malicious());
    assertSafe(result);
    assert.equal(result.enabled, true);
  });

  test(`${label} rejects prototype keys from defaults and nested placeholders`, () => {
    assertSafe(merge(malicious(), { enabled: true }));
    assertSafe(merge({ options: null }, { options: malicious() }).options);
    assertSafe(merge({ options: 1 }, { options: malicious() }).options);
    assertSafe(merge({ list: [] }, { list: [malicious()] }).list[0]);
  });

  test(`${label} preserves ordinary merge options and source objects`, () => {
    const key = Symbol('setting');
    const first = { args: ['one'], nested: { a: 1 }, [key]: 1 };
    const second = { args: ['two'], nested: { b: 2 } };
    assert.deepEqual(merge.all([first, second]).args, ['one', 'two']);
    assert.deepEqual(first.args, ['one']);
    assert.equal(merge(first, second)[key], 1);
    assert.deepEqual(merge(first, second, { arrayMerge: (_a, b) => b }).args, ['two']);
    assert.deepEqual(merge(first, second, {
      customMerge: name => name === 'nested' ? (a, b) => ({ sum: a.a + b.b }) : undefined,
    }).nested, { sum: 3 });
  });

  test(`${label} loads the reviewed local merger implementation`, () => {
    const fs = require('node:fs');
    assert.equal(owner('deepmerge/package.json').version, '4.3.2+wppconnect.1');
    const installed = path.dirname(owner.resolve('deepmerge'));
    for (const file of ['index.cjs', 'is-mergeable-object.cjs']) {
      const actual = fs.readFileSync(path.join(installed, file), 'utf8').replace(/\r\n/g, '\n');
      const expected = fs.readFileSync(path.join(__dirname, '../../vendor/deepmerge', file), 'utf8').replace(/\r\n/g, '\n');
      assert.equal(actual, expected);
    }
  });
}

test('the SVG optimizer transforms a real component with the patched merger', async () => {
  const classic = createRequire(require.resolve('@docusaurus/preset-classic'));
  const webpack = createRequire(classic.resolve('@svgr/webpack'));
  const { transform } = webpack('@svgr/core');
  const code = await transform(
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><rect width="24" height="24" fill="red"/></svg>',
    { plugins: [webpack('@svgr/plugin-svgo'), webpack('@svgr/plugin-jsx')], icon: true },
    { componentName: 'SecurityFixtureIcon' },
  );
  assert.match(code, /SecurityFixtureIcon/);
  assert.match(code, /<svg/);
  assert.match(code, /red/);
});

test('the PWA bundler generates a real service worker with the patched merger', async (t) => {
  const fs = require('node:fs');
  const pwa = createRequire(require.resolve('@docusaurus/plugin-pwa'));
  const { generateSW } = pwa('workbox-build');
  const root = mkdtempSync(path.join(tmpdir(), 'workbox-security-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  writeFileSync(path.join(root, 'index.html'), '<!doctype html><title>PWA fixture</title>');
  const swDest = path.join(root, 'sw.js');
  const result = await generateSW({
    globDirectory: root,
    globPatterns: ['*.html'],
    swDest,
    inlineWorkboxRuntime: true,
    skipWaiting: true,
    clientsClaim: true,
  });
  assert.equal(result.count, 1);
  assert.deepEqual(result.warnings, []);
  const output = fs.readFileSync(swDest, 'utf8');
  assert.match(output, /index\.html/);
  assert.match(output, /precache/);
});

test('Tinypool ignores an inherited worker filename in run options', async (t) => {
  const coreRequire = createRequire(require.resolve('@docusaurus/core/package.json'));
  const { default: Tinypool } = await import(
    require('node:url').pathToFileURL(coreRequire.resolve('tinypool')).href
  );
  const root = mkdtempSync(path.join(tmpdir(), 'tinypool-security-'));
  const expected = path.join(root, 'expected.mjs');
  const unexpected = path.join(root, 'unexpected.mjs');
  writeFileSync(expected, 'export default task => ({ worker: "expected", task });');
  writeFileSync(unexpected, 'export default task => ({ worker: "unexpected", task });');
  const pool = new Tinypool({
    filename: expected,
    minThreads: 1,
    maxThreads: 1,
    concurrentTasksPerWorker: 1,
    runtime: 'worker_threads',
    isolateWorkers: false,
    workerData: { integration: 'Docusaurus' },
  });
  t.after(async () => {
    await pool.destroy();
    rmSync(root, { recursive: true, force: true });
  });
  const previous = Object.getOwnPropertyDescriptor(Object.prototype, 'filename');
  try {
    Object.defineProperty(Object.prototype, 'filename', {
      value: unexpected,
      writable: true,
      configurable: true,
    });
    const task = { pathnames: ['/', '/pt-BR/'] };
    const result = await pool.run(task, { signal: new AbortController().signal });
    assert.deepEqual(result, { worker: 'expected', task });
  } finally {
    if (previous) Object.defineProperty(Object.prototype, 'filename', previous);
    else delete Object.prototype.filename;
  }
});
