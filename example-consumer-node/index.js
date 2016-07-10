
'use strict';

const ExampleProviderLib = require('example-provider-lib')

const exampleProviderLib = new ExampleProviderLib();
exampleProviderLib.exampleComponent.sayHello().then(message => {
  console.log('message:', message);
});
