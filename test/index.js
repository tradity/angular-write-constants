'use strict';

const writeConstants = require('../');
const assert = require('assert');

describe('constantList', function() {
  it('Should create a list of angular constants from the data files', function() {
    const dataFiles = ['test/data/config.primary.json', 'test/data/config.secondary.json'];
    const constants = writeConstants.constantList(dataFiles, 'testModule');
    
    const angular = {
      module: moduleName => (angular._module = moduleName, angular),
      constant: (name, value) => {
        assert.strictEqual(typeof angular._constants[name], 'undefined');
        angular._constants[name] = value;
        return angular
      },
      _constants: {}
    };
    
    eval(constants);
    
    assert.deepStrictEqual(angular._constants, {
      ANSWER_TO_EVERYTHING: 42,
      OVERRIDDEN_VALUE: 'someNewValue',
      API_ENDPOINT: 'https://google.com/'
    });
    
    assert.strictEqual(angular._module, 'testModule');
  });
});
