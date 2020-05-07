const assert = require('assert');

// escreva a função addAllnumbers para passar nos testes abaixo:

const addAllnumbers = (a) => {
  let total = 0;
  for (let i = 0; i < a.length; i += 1) { 
    total += a[i];
  }
  return total;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
