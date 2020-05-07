const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

const obj1Js = JSON.stringify(obj1);
const obj2Js = JSON.stringify(obj2);
const obj3Js = JSON.stringify(obj3);

assert.deepEqual(obj1, obj2);
assert.notDeepEqual(obj1, obj3);
assert.notDeepEqual(obj2, obj3);
