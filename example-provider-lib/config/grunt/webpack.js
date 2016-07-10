
'use strict';

const merge = require('lodash.merge');
const defaultConfig = require('../webpack');
const overrideConfig = {
  entry: './src/index.js',

  // TODO: Define your library dependencies here:
  // https://webpack.github.io/docs/library-and-externals.html
  externals: {
  }
};

module.exports = {

  'dist-amd': merge({}, defaultConfig, overrideConfig, {
    output: {
      filename: './dist/example-provider-lib-amd.js',
      libraryTarget: 'amd'
    }
  }),

  'dist-this': merge({}, defaultConfig, overrideConfig, {
    output: {
      filename: './dist/example-provider-lib-this.js',
      libraryTarget: 'this',
      library: 'ExampleProviderLib'
    }
  }),

  'dist-commonjs2': merge({}, defaultConfig, overrideConfig, {
    output: {
      filename: './dist/example-provider-lib-commonjs2.js',
      libraryTarget: 'commonjs2'
    }
  }),

};
