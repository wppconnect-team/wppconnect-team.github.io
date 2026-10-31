# Private minimatch compatibility adapter

Legacy consumers (`serve-handler`, Redocly and FileList) expect the
CommonJS export shape of minimatch 3/5. Upstream minimatch 11 exports a namespace
instead. This adapter exposes the upstream `minimatch` function with that
namespace's helpers attached. It contains no copied matcher implementation.

The implementation comes from the exact upstream `minimatch@11.0.3` dependency
via the `minimatch-upstream` npm alias, and includes the fix for
GHSA-g3hv-75wg-m249. Modern CommonJS consumers receive the same named helpers;
ES modules re-export upstream directly. All minimatch dependency edges use this
adapter. Version `11.0.3+wppconnect.2` identifies this private adapter, not an
upstream release. It is never published to a registry.

The tarball is committed so `npm ci` installs the same adapter in CI. Repack
after editing with:

```sh
npm pack ./vendor/minimatch-compat --pack-destination ./vendor
```

Regression coverage in `.github/actions/dependencies.test.cjs` exercises the
actual HTTP server, remote OpenAPI header matching, FileList selection and
Stylus wildcard imports. Remove the adapter when those parent packages support
patched minimatch versions directly.

Upstream advisory: https://github.com/advisories/GHSA-g3hv-75wg-m249
