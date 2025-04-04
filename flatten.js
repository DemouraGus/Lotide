const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

const flatten = function(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
    result.push(arr[i]);
    }
  }
  return result;
}

console.log(flatten([1, 2, [3, [0, 1], 4], 5, [6]]));