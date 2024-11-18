const assertArraysEqual = require("../assertArraysEqual.js");

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([], []);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);