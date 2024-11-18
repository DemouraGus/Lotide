const assertObjectsEqual = require("./assertObjectsEqual");

const countLetters = function(string) {
  const result = {};

  for (const letter of string) {
    result[letter] = (result[letter] || 0) + 1;
  }

  return result;
};

module.exports = countLetters;

console.log(countLetters("LHL"));
assertObjectsEqual(countLetters("LHL"), ({ L: 2, H: 1 }));