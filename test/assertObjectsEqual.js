const assert = require("chai").assert;
const assertObjectsEqual = require("../assertObjectsEqual");

describe("#assertObjectsEqual", () => {
  it("returns true for {name: 'Gus', age: 37} and {name: 'Gus', age: 37}", () => {
    assert.deepEqual({name: "Gus", age: 37}, {name: "Gus", age: 37});
  });
  it("returns false for {name: 'Gus', age: 37} and {name: 'Gus', age: 37}", () => {
    assert.notDeepEqual({name: "Gus", age: 37}, {name: "Gus", age: 38});
  });
  
});