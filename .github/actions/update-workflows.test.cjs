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
const { pathToFileURL } = require('node:url');
const { test } = require('node:test');

function workflowStep(filename, name) {
  return readFileSync(path.join(__dirname, '../workflows', filename), 'utf8')
    .split(`      - name: ${name}`)[1]
    .split('\n      - name: ')[0]
    .split('        run: |')[1]
    .trimEnd()
    .split(/\r?\n/)
    .slice(1)
    .map((line) => line.slice(10))
    .join('\n');
}
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

function fixture(t, commitStep, filename) {
  const root = mkdtempSync(path.join(tmpdir(), 'website-update-workflow-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const remote = path.join(root, 'remote.git');
  const updater = path.join(root, 'updater');
  const writer = path.join(root, 'writer');
  git(root, 'init', '--bare', '--initial-branch=main', remote);
  function configure(repo) {
    git(repo, 'config', 'user.name', 'Workflow Test');
    git(repo, 'config', 'user.email', 'workflow@example.com');
    git(repo, 'config', 'commit.gpgsign', 'false');
    git(repo, 'config', 'core.autocrlf', 'false');
  }
  git(root, 'clone', remote, writer);
  configure(writer);
  writeFileSync(path.join(writer, filename), '["1"]\n');
  git(writer, 'add', '.');
  git(writer, 'commit', '-m', 'Initial versions');
  git(writer, 'push', '-u', 'origin', 'main');
  git(root, 'clone', '--depth=1', pathToFileURL(remote).href, updater);
  configure(updater);
  assert.equal(git(updater, 'rev-parse', '--is-shallow-repository'), 'true');
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
    writer,
    filename,
    advance,
    execute: () =>
      run(bash, ['-e', '-c', `gh() { return 0; }\n${commitStep}`], updater),
    versions: () => git(root, '--git-dir', remote, 'show', `main:${filename}`),
  };
}

for (const [label, workflow, step, filename] of [
  [
    'versions',
    'update-whatsapp-versions.yml',
    'Commit WhatsApp Versions',
    'versions.json',
  ],
  ['blog', 'update-blog.yml', 'Commit Blog Releases', 'post.md'],
  ['lockfile', 'update-lock.yml', 'Commit lockfile', 'package-lock.json'],
]) {
  const commitStep = workflowStep(workflow, step);
  const makeFixture = (t) => fixture(t, commitStep, filename);

  test(`${label}: preserves a concurrent remote commit and pushes the update`, (t) => {
    const f = makeFixture(t);
    const concurrent = f.advance(
      'README.md',
      'Concurrent documentation update\n',
    );
    writeFileSync(path.join(f.updater, filename), '["1","2"]\n');
    const result = f.execute();
    assert.equal(result.status, 0, result.stdout + result.stderr);
    assert.equal(f.versions(), '["1","2"]');
    git(f.updater, 'merge-base', '--is-ancestor', concurrent, 'origin/main');
  });

  test(`${label}: succeeds without a new commit when files are unchanged`, (t) => {
    const f = makeFixture(t);
    const before = git(f.updater, 'rev-parse', 'HEAD');
    const result = f.execute();
    assert.equal(result.status, 0, result.stdout + result.stderr);
    assert.match(result.stdout, /No (?:lockfile )?changes to commit/);
    assert.equal(git(f.updater, 'rev-parse', 'HEAD'), before);
  });

  test(`${label}: accepts an identical update already pushed by another run`, (t) => {
    const f = makeFixture(t);
    const concurrent = f.advance(filename, '["1","2"]\n');
    writeFileSync(path.join(f.updater, filename), '["1","2"]\n');
    const result = f.execute();
    assert.equal(result.status, 0, result.stdout + result.stderr);
    assert.equal(f.versions(), '["1","2"]');
    assert.equal(git(f.updater, 'rev-parse', 'HEAD'), concurrent);
  });

  test(`${label}: reports conflicting updates without overwriting remote files`, (t) => {
    const f = makeFixture(t);
    f.advance(filename, '["1","3"]\n');
    writeFileSync(path.join(f.updater, filename), '["1","2"]\n');
    const result = f.execute();
    assert.notEqual(result.status, 0);
    assert.equal(f.versions(), '["1","3"]');
  });

  function rejectPushes(f, attempts) {
    const hook = path.join(f.remote, 'hooks/pre-receive');
    writeFileSync(
      hook,
      `#!/bin/sh
count_file="$GIT_DIR/push-attempts"
count=0
if [ -f "$count_file" ]; then
  read -r count < "$count_file"
fi
count=$((count + 1))
printf '%s\\n' "$count" > "$count_file"
[ "$count" -gt ${attempts} ]
`,
    );
    chmodSync(hook, 0o755);
  }

  test(`${label}: retries a rejected push and eventually publishes the update`, (t) => {
    const f = makeFixture(t);
    rejectPushes(f, 1);
    writeFileSync(path.join(f.updater, filename), '["1","2"]\n');
    const result = f.execute();
    assert.equal(result.status, 0, result.stdout + result.stderr);
    assert.equal(f.versions(), '["1","2"]');
    assert.equal(
      readFileSync(path.join(f.remote, 'push-attempts'), 'utf8').trim(),
      '2',
    );
  });

  test(`${label}: stops after three rejected pushes and reports failure`, (t) => {
    const f = makeFixture(t);
    rejectPushes(f, 3);
    writeFileSync(path.join(f.updater, filename), '["1","2"]\n');
    const result = f.execute();
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /Failed to push .* after 3 attempts/);
    assert.equal(f.versions(), '["1"]');
    assert.equal(
      readFileSync(path.join(f.remote, 'push-attempts'), 'utf8').trim(),
      '3',
    );
  });

  test(`${label}: fetches only the target branch during a rebase`, (t) => {
    const f = makeFixture(t);
    git(f.writer, 'push', 'origin', 'HEAD:gh-pages');
    git(
      f.updater,
      'config',
      'remote.origin.fetch',
      '+refs/heads/*:refs/remotes/origin/*',
    );
    writeFileSync(path.join(f.updater, filename), '["1","2"]\n');
    const result = f.execute();
    assert.equal(result.status, 0, result.stdout + result.stderr);
    const refs = git(
      f.updater,
      'for-each-ref',
      '--format=%(refname)',
      'refs/remotes/origin/',
    );
    assert.doesNotMatch(refs, /gh-pages/);
  });

  test(`${label}: recovers when another writer pushes between rebase and push`, (t) => {
    const f = makeFixture(t);
    writeFileSync(
      path.join(f.writer, 'README.md'),
      'Concurrent documentation update\n',
    );
    git(f.writer, 'add', '.');
    git(f.writer, 'commit', '-m', 'Concurrent update');
    const concurrent = git(f.writer, 'rev-parse', 'HEAD');
    git(f.writer, 'push', 'origin', 'HEAD:race');
    const hook = path.join(f.updater, '.git/hooks/pre-push');
    const remote = f.remote.replace(/\\/g, '/').replace(/'/g, "'\\''");
    writeFileSync(
      hook,
      `#!/bin/sh
if [ ! -f .git/raced ]; then
  touch .git/raced
  git --git-dir='${remote}' update-ref refs/heads/main '${concurrent}'
fi
`,
    );
    chmodSync(hook, 0o755);
    writeFileSync(path.join(f.updater, filename), '["1","2"]\n');
    const result = f.execute();
    assert.equal(result.status, 0, result.stdout + result.stderr);
    assert.match(result.stdout, /Push attempt 1 failed/);
    assert.equal(f.versions(), '["1","2"]');
    git(f.updater, 'merge-base', '--is-ancestor', concurrent, 'HEAD');
  });

  if (label !== 'lockfile') {
    const deployStep = workflowStep(
      workflow,
      label === 'blog' ? 'Deploy updated blog' : 'Deploy updated versions',
    );
    for (const changed of [false, true]) {
      test(`${label}: ${changed ? 'dispatches publication after an update' : 'skips publication when unchanged'}`, (t) => {
        const f = makeFixture(t);
        const before = git(f.updater, 'rev-parse', 'HEAD');
        if (changed)
          writeFileSync(path.join(f.updater, filename), '["1","2"]\n');
        const commit = f.execute();
        assert.equal(commit.status, 0, commit.stdout + commit.stderr);
        const result = run(
          bash,
          [
            '-e',
            '-c',
            `gh() { printf 'DISPATCH %s\\n' "$*"; }\nGITHUB_SHA='${before}'\n${deployStep}`,
          ],
          f.updater,
        );
        assert.equal(result.status, 0, result.stdout + result.stderr);
        assert.equal(
          result.stdout.trim(),
          changed ? 'DISPATCH workflow run publish.yml' : '',
        );
      });
    }
  }
}
