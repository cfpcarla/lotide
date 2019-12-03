const assert = require('chai').assert;
const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');


describe("#middle", () => {
  it("returns middle of 1", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns middle", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });

  it("returns middle", () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });

  it("returns middle", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });

  it("returns middle", () => {
    assert.deepEqual(middle([1,2]), []);
  });
});

