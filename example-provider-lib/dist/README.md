
# Distribution Bundles

## Summary

Distribution bundles are intended for browser consumption. The bundles are checked into version control so they can be easily downloaded or used by bower.

Bundles are compiled using [webpack][]. The bundles within this folder are named after the target library specified by [webpack][] [`libraryTarget`](https://webpack.github.io/docs/configuration.html#output-librarytarget)

## Bundle Descriptions

File name                  | Short description
-------------------------- | -----------------
example-provider-lib-amd.js      | AMD format such as [RequireJS][].
example-provider-lib-amd.min.js  | Minified for production.
example-provider-lib-this.js     | Exported to `this` variable.
example-provider-lib-this.min.js | Minified for production.

[RequireJS]: http://requirejs.org/
[webpack]: https://webpack.github.io/docs/what-is-webpack.html

## CommonJS

No bundle is compiled for CommonJS. Simply `require` via [npm][] or reference `src/index.js`.

[npm]: https://www.npmjs.com/
