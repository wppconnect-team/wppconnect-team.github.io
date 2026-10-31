const modern = require('minimatch-upstream');

// Minimatch 3/5 exported a callable function with helpers attached. Preserve
// that shape for legacy consumers while using the patched upstream matcher.
module.exports = Object.assign(modern.minimatch, modern);
