
'use strict';

import ExampleProviderLib from '../../src';
import {expect} from '../support/TestUtils';

describe('ExampleComponent integration tests', () => {

  const exampleProviderLib = new ExampleProviderLib();

  it('should greet the world by default', () => {
    return expect(exampleProviderLib.exampleComponent.sayHello())
      .to.eventually.equal('Hello world');
  });

  it('should greet me', () => {
    return expect(exampleProviderLib.exampleComponent.sayHello('COREY'))
      .to.eventually.equal('Hello corey');
  });

});
