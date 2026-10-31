# WPPConnect official logo

The official source is `wppconnect-original.png`, supplied by the project owner.
Its bytes are preserved. SHA-256: `b505481a78eead90a61cab4ac46f80a3cb25e67506a0482991926e1d076b543a`.

- `wppconnect-light.svg`: dark monochrome presentation on light surfaces.
- `wppconnect-dark.svg`: original white presentation on dark surfaces.
- `wppconnect-icon.svg`: the complete mark on a fixed dark tile for browser/app icons.
- `wppconnect-maskable.svg`: the same mark inside the maskable icon safe area.
- PNG/ICO files are browser renderings of these SVG assets for legacy browsers and Apple devices.

The SVG files embed the unchanged source PNG. Their viewports remove the wide
transparent canvas margins from the supplied image. The light presentation uses
an SVG color filter; no logo geometry is redrawn. Preserve proportions and use
descriptive alternative text. Do not add glows, gradients or shadows to the mark.

For React/Docusaurus use the current application theme to select the light/dark
asset. For Markdown use a `<picture>` with `prefers-color-scheme` sources.
The complete downloadable brand kit is served at `/brand/` by the official site.

Use the optimized `wppconnect-light.png` and `wppconnect-dark.png` (640x353) for page headers and Markdown. The SVG files remain the self-contained rendering sources.
