// TDD Test Assignment 1, Pair: Angwen Sarah and Kabwaga Veronica Amooti

const assert = require('assert');
const { factorial } = require('../factorial');

describe('factorial()', () => {
  it('should return 1 for 0!', () => {
    assert.strictEqual(factorial(0), 1);
  });
 });