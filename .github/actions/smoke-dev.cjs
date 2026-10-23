const assert = require('node:assert/strict');
const { spawn } = require('node:child_process');
const { once } = require('node:events');
const { setTimeout: delay } = require('node:timers/promises');

async function main() {
  const server = spawn(process.execPath, [
    require.resolve('@docusaurus/core/bin/docusaurus.mjs'),
    'start', '--no-open', '--host', '127.0.0.1', '--port', '4173',
  ], { env: { ...process.env, NO_UPDATE_NOTIFIER: '1' } });
  let output = '';
  const capture = (chunk) => { output = (output + chunk).slice(-64000); };
  server.stdout.on('data', capture);
  server.stderr.on('data', capture);
  const exited = once(server, 'exit');
  try {
    const deadline = Date.now() + 120000;
    let ready = false;
    while (Date.now() < deadline && server.exitCode === null) {
      try {
        const response = await fetch('http://127.0.0.1:4173/', {
          signal: AbortSignal.timeout(3000),
        });
        if (response.ok && (await response.text()).includes('WPPConnect')) {
          ready = true;
          break;
        }
      } catch {
        // The server can take a few seconds to compile before accepting requests.
      }
      await delay(500);
    }
    assert.ok(ready, `Development server failed to start:\n${output}`);
    for (const route of ['/docs/tutorial/intro', '/whatsapp-versions']) {
      const response = await fetch(`http://127.0.0.1:4173${route}`, {
        signal: AbortSignal.timeout(10000),
      });
      assert.equal(response.status, 200, `${route}\n${output}`);
    }
    console.log('Development server served the home, tutorial and versions pages');
  } finally {
    server.kill();
    await exited;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
