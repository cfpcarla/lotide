const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🥳 Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`😱 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const without = function(source, itemsToRemove) {
  let result = source;
  for (let itemToRemove of itemsToRemove) {
    let index = result.indexOf(itemToRemove);
    if (index > -1) {
      result.splice(index, 1);
    }
  }
  return result;
};

// simple case
const words = ["hello", "world", "lighthouse"];
let result = without(words, ["lighthouse"]);

assertArraysEqual(result, ["hello", "world"]);


// when not all itemsToRemove exist in the source array
const numbers = [1,3,7,9];
result = without(numbers , [1,5,6]);

assertArraysEqual(result, [3,7,9]);


// when the source array is empty

result = without([], [0]);
assertArraysEqual(result, []);

// when the itemsToRemove array is empty
result = without([0], []);
assertArraysEqual(result, [0]);

// when both arrays are empty
result = without([], []);
assertArraysEqual(result, []);

//when both arrays are the same
result = without([1,2,3], [1,2,3]);
assertArraysEqual(result, []);