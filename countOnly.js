const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥳 Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`😱 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//how many instances of each string were found in the allItems array of strings.
const countOnly = function(allItems, itemsToCount) {
  let result = {};

  for (let item of allItems) {
    let key = itemsToCount[item];
    console.log('item: ', item);
    console.log('key: ', key);
    if (key) {
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
  }
  for (let key in itemsToCount) {
    console.log('key: ', key);
    if (!result[key]) {
      result[key] = undefined;
    }
  }
  return result;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
console.log(result1);
// expected return value:
// {
//   Jason: 1,
//   Karima: undefined,
//   Fang: 2
// }

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);