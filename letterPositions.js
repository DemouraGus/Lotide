const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
    // console.log(results[sentence[i]]);  // if (resl)
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
      // results[sentence[i]] = (results[sentence[i]] || 0) + [i];
    }
  }

  return results;
}

module.exports = letterPositions;

// console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").e, [1]);