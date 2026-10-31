const assert = require('node:assert/strict');
const { execFile } = require('node:child_process');
const { once } = require('node:events');
const { mkdtempSync, mkdirSync, readFileSync, readdirSync, rmSync } = require('node:fs');
const http = require('node:http');
const { tmpdir } = require('node:os');
const path = require('node:path');
const { test } = require('node:test');
const { promisify } = require('node:util');

test('blog workflow loads its dependencies and generates posts from GitHub releases', async (t) => {
  const root = mkdtempSync(path.join(tmpdir(), 'blog-releases-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(path.join(root, 'blog'));
  const requests = [];
  const server = http.createServer((request, response) => {
    requests.push({ url: request.url, authorization: request.headers.authorization });
    response.setHeader('content-type', 'application/json');
    const release = {
      name: 'v1.2.3',
      tag_name: 'v1.2.3',
      published_at: '2026-10-31T00:00:00Z',
      body: '## [1.2.3](https://example.com/compare)\n\n### Bug Fixes\n\n* Fix the release workflow.',
      html_url: 'https://example.com/releases/tag/v1.2.3',
      draft: false,
      prerelease: false,
    };
    response.end(JSON.stringify([
      release,
      { ...release, tag_name: 'v2.0.0-draft', draft: true },
      { ...release, tag_name: 'v2.0.0-beta', prerelease: true },
    ]));
  });
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => new Promise((resolve) => {
    server.closeAllConnections();
    server.close(resolve);
  }));

  // Run the unchanged workflow entry point with real dependencies in a child
  // process, directing API requests and generated files to isolated fixtures.
  const runner = `
    const { readFileSync } = require('node:fs');
    const { createRequire } = require('node:module');
    const path = require('node:path');
    const vm = require('node:vm');
    const [script, root] = process.argv.slice(1);
    Promise.resolve(vm.runInNewContext(readFileSync(script, 'utf8'), {
      require: createRequire(script),
      __dirname: path.join(root, '.github', 'actions'),
    })).catch((error) => {
      console.error(error);
      process.exitCode = 1;
    });
  `;
  await promisify(execFile)(process.execPath, [
    '-e', runner, path.join(__dirname, 'publish-blog-releases.js'), root,
  ], {
    env: {
      ...process.env,
      GITHUB_ACTION: 'blog-release-test',
      GITHUB_TOKEN: 'blog-workflow-test-token',
      INPUT_GITHUB_TOKEN: '',
      INPUT_TOKEN: '',
      GITHUB_API_URL: `http://127.0.0.1:${server.address().port}`,
      HTTP_PROXY: '', HTTPS_PROXY: '', ALL_PROXY: '',
      http_proxy: '', https_proxy: '', all_proxy: '',
    },
    timeout: 10000,
  });

  const projects = ['wa-js', 'wppconnect', 'wppconnect-server', 'server-cli'];
  assert.deepEqual(requests.map(({ url }) => url), projects.map(
    (project) => `/repos/wppconnect-team/${project}/releases?per_page=5`
  ));
  for (const { authorization } of requests) {
    assert.equal(authorization, 'token blog-workflow-test-token');
  }
  const YAML = require('yaml');
  for (const project of projects) {
    const directory = path.join(root, 'blog', project);
    assert.deepEqual(readdirSync(directory), ['v1.2.3.md']);
    const content = readFileSync(path.join(directory, 'v1.2.3.md'), 'utf8');
    const header = YAML.parse(content.split('---\n')[1]);
    assert.equal(header.authors, 'wppconnect');
    assert.match(header.title, /patch release: v1\.2\.3$/);
    assert.match(content, /<!--truncate-->/);
    assert.match(content, /### Bug Fixes/);
    assert.doesNotMatch(content, /https:\/\/example\.com\/compare/);
    assert.match(content, /\[release page\]\(https:\/\/example\.com\/releases\/tag\/v1\.2\.3\)/);
  }
});
