# WPPConnect official logo

The project owner supplied the solid WPPConnect mark and the green square artwork.
The original PNG bytes are preserved:

- `wppconnect-original.png`: SHA-256 `993f7ac90caa6f809e01425939db1971d18f40657695afe2fa1407a87a027357`.
- `wppconnect-green-original.png`: SHA-256 `a158545c7456462956e77c2547a7b7dc934a9a228a67dd58950390aa53339622`.

Use `/brand/v2/wppconnect-light.png` on light surfaces and
`/brand/v2/wppconnect-dark.png` on dark surfaces. The light variant uses green
`#02623f`, sampled from the supplied green artwork. The dark variant keeps the
white mark. The self-contained SVG sources embed the unchanged supplied PNG;
their viewports remove transparent canvas margins without cropping the mark.
The optimized header PNGs are 640x353 and preserve the logo geometry.

Use the supplied green square for browser, Apple and app icons. The maskable
variant places the full mark inside the safe area on the same green background.
PNG and ICO derivatives are browser renderings of these SVG sources.

Select artwork from the active application theme. For Markdown, use a `picture`
with `prefers-color-scheme`. Keep aspect ratio, clear space and descriptive alt
text. Do not add outlines, shadows or gradients to the mark.

Versioned URLs prevent old cached images from showing the previous outlined
artwork in GitHub READMEs and browser icons. Root `/brand/` assets remain aliases
for existing consumers. Both original files are available in the brand kit.
