
'use strict';

import ExampleComponent from './ExampleComponent';

/**
 * Example library to be consumed in Node.js and Browser.
 *
 * @example
 * var ExampleProviderLib = require('example-provider-lib');
 * var exampleProviderLib = new ExampleProviderLib();
 */
export default class ExampleProviderLib {

  constructor() {
    /**
     * @instance
     * @type {ExampleComponent}
     */
    this.exampleComponent = new ExampleComponent();
  }

}
