const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// 1
assert.equal(sum(4, 5), 9);

// 2
assert.equal(sum(0, 0), 0);

// 3
assert.ifError(sum(4, '5'));

// 4
assert.throws(() => sum(4, '5'), /^Error: parameters must be numbers$/);
