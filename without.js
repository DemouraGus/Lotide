const assertArraysEqual = require("./assertArraysEqual");

const without = function(source, itemsToRemove) {
  let arrayWithoutItemsToRemove = [];

  for (let i = 0; i < source.length; i++) {
    let shouldAdd = true;

    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        shouldAdd = false;
        break;
      }
    }

    if (shouldAdd) {
      arrayWithoutItemsToRemove.push(source[i]);
    }
   }

   return arrayWithoutItemsToRemove
};

module.exports = without;

// console.log(without([1, 2, 3], [1]));

const candy = ["twix", "licorice", "kitkat"];
// console.log(without(candy, ["licorice"]));
assertArraysEqual(without(candy, ["licorice"]), ["twix", "kitkat"]);

const numbers = [1, 2, 3, 4, 5, 3, 3, 6,];
// console.log(without(numbers, [3]));
assertArraysEqual(without(numbers, [3, 5]), [1, 2, 4, 6]);
assertArraysEqual(without(numbers, [3]), [1, 2, 4, 5, 6]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);