
// const assertArraysEqual = function(actual, expected) {
//   if (eqArrays(actual, expected)) {
//     console.log(`🥳 Assertion Passed ${actual} === ${expected}`);
//   } else {
//     console.log(`😱 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


// const eqArrays = function(actual, expected) {
//   if (actual.length !== expected.length) {
//     return false;
//   }
//   for (let i = 0; i < actual.length; i++) {
//     if (actual[i] !== expected[i]) {
//       return false;
//     }
//   }
//   return true;
// };

const letterPositions = function(sentence) {
  const results = {};

  for (let index in sentence) {
    if (sentence[index] !== " ") {
      if (results[sentence[index]] === undefined) {
        results[sentence[index]] = [];
        results[sentence[index]].push(index);
      } else {
        results[sentence[index]].push(index);
      }
    }

  }
  console.log(results);
  return results;
};

letterPositions("carla");

//assertArraysEqual(letterPositions("hello").e, [1]);