const eqArrays= require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([2, 2, 2], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1, 2, 3,4,5], [1, 2, 3]), false);
assertEqual(eqArrays(["1, 2, 3"], [1, 2, 3]), false);