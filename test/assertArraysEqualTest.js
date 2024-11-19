const assert = require("chai").assert;
const assertArraysEqual = require("../assertArraysEqual.js");

describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.isTrue(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
  it("returns true for [] and []", () => {
    assert.isTrue(assertArraysEqual([], []));
  });
  it("returns true for ['1', '2', '3'] and ['1', '2', '3']", () => {
    assert.isTrue(assertArraysEqual(['1', '2', '3'], ['1', '2', '3']));
  });
});