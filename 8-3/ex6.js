const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// 1
assert.equal(myFizzBuzz(15), 'fizzbuzz');

// 2
assert.equal(myFizzBuzz(3), 'fizz');

// 3
assert.equal(myFizzBuzz(5), 'buzz');

// 4
assert.equal(myFizzBuzz(2), 2);

// 5
assert.equal(myFizzBuzz('s'), false);
