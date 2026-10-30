const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const runtime = require('react/jsx-runtime');

async function renderMarkdown(source) {
  const { evaluate } = await import('@mdx-js/mdx');
  const { default: Content } = await evaluate(source, { ...runtime });
  return renderToStaticMarkup(React.createElement(Content));
}

async function implicitlyClosedParagraphs(html) {
  const { parseFragment } = await import('parse5');
  const document = parseFragment(html, { sourceCodeLocationInfo: true });
  const invalid = [];
  function visit(node) {
    if (node.tagName === 'p' && node.sourceCodeLocation && !node.sourceCodeLocation.endTag) {
      invalid.push(node.sourceCodeLocation.startOffset);
    }
    for (const child of node.childNodes || []) visit(child);
  }
  visit(document);
  return invalid;
}

test('detects Markdown paragraphs nested in a raw paragraph', async () => {
  const html = await renderMarkdown('<p align="center">\n  <a href="/docs">Docs</a> •\n  <a href="/api">API</a>\n</p>');
  assert.notEqual((await implicitlyClosedParagraphs(html)).length, 0);
});

test('tutorial markup does not require browser paragraph repair before hydration', async () => {
  const source = readFileSync(path.resolve(__dirname, '../../docs/tutorial/intro.md'), 'utf8')
    .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
  const html = await renderMarkdown(source);
  assert.deepEqual(await implicitlyClosedParagraphs(html), []);
});
