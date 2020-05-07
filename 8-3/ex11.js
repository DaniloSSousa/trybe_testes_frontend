const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

assert.equal(isAbove(3, 2), true);
assert.equal(isAbove(2, 3), false);
