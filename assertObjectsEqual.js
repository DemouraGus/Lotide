const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    return false;
  }
};

module.exports = assertObjectsEqual;

assertObjectsEqual({name: "Gus", age: 37}, {age: 37, name: "Gus"});
assertObjectsEqual({name: "Goose", age: 37}, {age: 37, name: "Gus"});
assertObjectsEqual({name: "Gus", age: 37, hobbies: ["reading", "videogame"]}, {age: 37, name: "Gus", hobbies: ["reading", "videogame"]});