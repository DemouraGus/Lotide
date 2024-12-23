const eqArrays = require("./eqArrays");

const assertArraysEqual = require("./assertArraysEqual");

const takeUntil = function(array, callback) {
    const newArray = [];
  
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        break;
    }
   newArray.push(array[i]);
  }

  return newArray;
};

module.exports = takeUntil;


assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ","), ["I've", 'been', 'to', 'Hollywood']);
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ",");
// console.log(results2);