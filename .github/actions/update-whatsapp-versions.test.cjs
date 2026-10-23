const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const {
  chmodSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} = require('node:fs');
const { tmpdir } = require('node:os');
const path = require('node:path');
const { test } = require('node:test');

const workflow = readFileSync(
  path.join(__dirname, '../workflows/update-whatsapp-versions.yml'),
  'utf8'
);
const commitStep = workflow
  .split('      - name: Commit WhatsApp Versions')[1]
  .split('        run: |')[1]
  .trimEnd()
  .split('\n')
  .slice(1)
  .map((line) => line.slice(10))
  .join('\n');
const bash = process.env.WORKFLOW_TEST_BASH || 'bash';

function run(command, args, cwd) {
  const result = spawnSync(command, args, { cwd, encoding: 'utf8' });
  assert.ifError(result.error);
  return result;
}

function git(cwd, ...args) {
  const result = run('git', ['-c', 'core.autocrlf=false', ...args], cwd);
  assert.equal(result.status, 0, result.stdout + result.stderr);
  return result.stdout.trim();
}

function fixture(t) {
  const root = mkdtempSync(path.join(tmpdir(), 'wa-versions-workflow-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const remote = path.join(root, 'remote.git');
  const updater = path.join(root, 'updater');
  const writer = path.join(root, 'writer');
  git(root, 'init', '--bare', '--initial-branch=main', remote);
  git(root, 'clone', remote, updater);
  function configure(repo) {
    git(repo, 'config', 'user.name', 'Workflow Test');
    git(repo, 'config', 'user.email', 'workflow@example.com');
    git(repo, 'config', 'commit.gpgsign', 'false');
    git(repo, 'config', 'core.autocrlf', 'false');
  }
  configure(updater);
  writeFileSync(path.join(updater, 'versions.json'), '["1"]\n');
  git(updater, 'add', '.');
  git(updater, 'commit', '-m', 'Initial versions');
  git(updater, 'push', '-u', 'origin', 'main');
  git(root, 'clone', remote, writer);
  configure(writer);
  function advance(filename, content) {
    writeFileSync(path.join(writer, filename), content);
    git(writer, 'add', '.');
    git(writer, 'commit', '-m', 'Concurrent update');
    git(writer, 'push');
    return git(writer, 'rev-parse', 'HEAD');
  }
  return {
    remote,
    updater,
    advance,
    execute: () => run(bash, ['-e', '-c', commitStep], updater),
    versions: () => git(root, '--git-dir', remote, 'show', 'main:versions.json'),
  };
}

test('preserves a concurrent remote commit and pushes the new versions', (t) => {
  const f = fixture(t);
  const concurrent = f.advance('README.md', 'Concurrent documentation update\n');
  writeFileSync(path.join(f.updater, 'versions.json'), '["1","2"]\n');
  const result = f.execute();
  assert.equal(result.status, 0, result.stdout + result.stderr);
  assert.equal(f.versions(), '["1","2"]');
  git(f.updater, 'merge-base', '--is-ancestor', concurrent, 'origin/main');
});

test('succeeds without a new commit when versions are unchanged', (t) => {
  const f = fixture(t);
  const before = git(f.updater, 'rev-parse', 'HEAD');
  const result = f.execute();
  assert.equal(result.status, 0, result.stdout + result.stderr);
  assert.match(result.stdout, /No changes to commit/);
  assert.equal(git(f.updater, 'rev-parse', 'HEAD'), before);
});

test('accepts an identical versions update already pushed by another run', (t) => {
  const f = fixture(t);
  const concurrent = f.advance('versions.json', '["1","2"]\n');
  writeFileSync(path.join(f.updater, 'versions.json'), '["1","2"]\n');
  const result = f.execute();
  assert.equal(result.status, 0, result.stdout + result.stderr);
  assert.equal(f.versions(), '["1","2"]');
  assert.equal(git(f.updater, 'rev-parse', 'HEAD'), concurrent);
});

test('reports conflicting updates without overwriting the remote versions', (t) => {
  const f = fixture(t);
  f.advance('versions.json', '["1","3"]\n');
  writeFileSync(path.join(f.updater, 'versions.json'), '["1","2"]\n');
  const result = f.execute();
  assert.notEqual(result.status, 0);
  assert.equal(f.versions(), '["1","3"]');
});

function rejectPushes(f, attempts) {
  const hook = path.join(f.remote, 'hooks/pre-receive');
  writeFileSync(hook, `#!/bin/sh
count_file="$GIT_DIR/push-attempts"
count=0
if [ -f "$count_file" ]; then
  read -r count < "$count_file"
fi
count=$((count + 1))
printf '%s\\n' "$count" > "$count_file"
[ "$count" -gt ${attempts} ]
`);
  chmodSync(hook, 0o755);
}

test('retries a rejected push and eventually publishes the versions', (t) => {
  const f = fixture(t);
  rejectPushes(f, 1);
  writeFileSync(path.join(f.updater, 'versions.json'), '["1","2"]\n');
  const result = f.execute();
  assert.equal(result.status, 0, result.stdout + result.stderr);
  assert.equal(f.versions(), '["1","2"]');
  assert.equal(readFileSync(path.join(f.remote, 'push-attempts'), 'utf8').trim(), '2');
});

test('stops after three rejected pushes and reports failure', (t) => {
  const f = fixture(t);
  rejectPushes(f, 3);
  writeFileSync(path.join(f.updater, 'versions.json'), '["1","2"]\n');
  const result = f.execute();
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Failed to push WhatsApp versions after 3 attempts/);
  assert.equal(f.versions(), '["1"]');
  assert.equal(readFileSync(path.join(f.remote, 'push-attempts'), 'utf8').trim(), '3');
});
