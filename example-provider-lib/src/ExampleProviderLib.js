
'use strict';

import ExampleComponent from './ExampleComponent';

/**
 * @class ExampleProviderLib
 * @description
 * Examples of how to consume Iso-Lib
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
