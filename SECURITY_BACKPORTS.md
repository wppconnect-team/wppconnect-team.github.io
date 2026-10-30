# Build dependency security backport

The local `deepmerge` artifact carries the prototype-key fix from upstream PR274
on the compatible4.x implementation. The version `4.3.2+wppconnect.1` identifies
this repository-maintained patch. It is private and must not be published to a
registry. Upstream has not published this version.

Both object-copy loops reject `__proto__` before assigning a property. The complete
implementation and the local `is-mergeable-object` helper retain their MIT notices.
Readable sources are in `vendor/deepmerge`; the checked-in tarball contains the
same runtime files. The npm override selects this artifact for the controlled
site build, including the SVG optimizer and PWA bundler.

Source references:

- [deepmerge4.3.1 source](https://github.com/TehShrike/deepmerge/tree/5b87756a5671635679001cbac72aa42f23472c81)
- [upstream fix commit](https://github.com/TehShrike/deepmerge/pull/274/commits/c5ad573121574db1c625b0aabcc6114ed7df6c5a)
- [is-mergeable-object1.1.0](https://github.com/TehShrike/is-mergeable-object/tree/v1.1.0)

Install the full locked build dependencies with `npm ci`. The site is generated
statically. The existing audit gate remains enabled.

`npm run test:dependencies` exercises prototype-key rejection through both actual
owning dependency paths, ordinary merge semantics, installed-file equivalence,
SVG component transformation and service-worker generation. Keep these checks
when replacing the backport with a validated upstream release.
