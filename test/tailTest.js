const assert = require('chai').assert;
const tail = require('../tail');
// const assertEqual = require('../assertEqual');

describe("#tail", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });
});





// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements

// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"

// assertEqual(result[1], "Labs");

// const result2 = tail([0]);
// assertEqual(result2.length, 0);

// const result3 = tail([]);
// assertEqual(result3.length, 0);

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);