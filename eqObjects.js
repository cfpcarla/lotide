const eqObjects = function(object1, object2) {
  const objectOneKeys = Object.keys(object1);
  const objectTwoKeys = Object.keys(object2);

  if (objectOneKeys.length !== objectTwoKeys.length) {
    return false;
  }

  for (let key of objectOneKeys) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥳  Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`❌  Assertion Failed: ${actual} !== ${expected}`);
  }
};


const firstObject = { a: 1 };
const secondObject = { a: 1 };
const differentObject = { a: 2 };
const differentObject2 = {a:1 , b:2};

assertEqual(eqObjects(firstObject, secondObject), true);
assertEqual(eqObjects(firstObject, differentObject), false);
assertEqual(eqObjects(firstObject, differentObject2), false);