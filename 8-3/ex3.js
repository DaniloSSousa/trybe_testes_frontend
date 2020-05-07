const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// 1
assert.equal(mySum([1, 2, 3, 4]), 10);

// 2
assert.equal(mySum([1, -2, -3, 4]), 0);
