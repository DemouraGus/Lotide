const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns ['Lighthouse'] for ['Yo Yo', 'Lighthouse']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse']), ['Lighthouse']);
  });
  it("returns [] for ['Lighthouse']", () => {
    assert.deepEqual(tail(['Lighthouse']), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  
});