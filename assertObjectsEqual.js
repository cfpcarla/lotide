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

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(actual)
    console.log(`🥳 Assertion Passed ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
};
const firstObject = { a: 1 };
const secondObject = { a: 1 };
const differentObject = { a: 2 };

assertObjectsEqual(firstObject, secondObject);
assertObjectsEqual(firstObject, differentObject);
