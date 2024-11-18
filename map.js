const assertArraysEqual = require("./assertArraysEqual");

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// const results1 = map(words, (word) => word[0]);
// console.log(results1);

assertArraysEqual((map([1, 2, 3], (i) => (i) * 2)), [2, 4, 6]);
assertArraysEqual((map(['Gustavo', 'Karen', 'Capitu'], (i) => (i.length))), [7, 5, 6]);