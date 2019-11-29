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

const takeUntil = function(array, callback) {
  let slice = [];
  for (let item of array) {
    if (callback(item) === true) {
      return slice;
    }
    slice.push(item);
  }
};

let data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


let slice = x => x === -1;
let comma = x => x === ",";

let found = takeUntil(data1, slice);
let foundAgain = takeUntil(data2, comma);

assertArraysEqual(found, [1, 2, 5, 7, 2]);
assertArraysEqual(foundAgain, ["I've", "been", "to", "Hollywood"]);



// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]