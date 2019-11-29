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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

let numbers = [1, 2, 5, 7, 2];
let sumCallback = number => number + 1;
assertArraysEqual(map(numbers, sumCallback), [2, 3, 6, 8, 3]);


let numbersAgain = [1, 4, 9, 16];
let multiplicationCallback = number => number * 2;
assertArraysEqual(map(numbersAgain, multiplicationCallback), [2, 8, 18, 32]);


let strings = ["carla", "luciano", "PIPOCA", "Arya"];
let stringCapitalize = strings => strings.toUpperCase();
assertArraysEqual(map(strings, stringCapitalize),["CARLA", "LUCIANO", "PIPOCA", "ARYA"]);

let emptyArray = [];
let getTypeOf = x => typeof x;
assertArraysEqual(map(emptyArray, getTypeOf),[]);


