const { assert } = require('assert');
const multiply = require('../multiply');

describe('multiply()', function () {
  it('should return 1 when multiplying 1 * 1', function () {
    assert.equal(multiply(1, 1), 1);
  });
});
