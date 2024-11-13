const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const result = {};

  for (const letter of string) {
    result[letter] = (result[letter] || 0) + 1;
  }

  return result;
};

console.log(countLetters("LHL"));
assertEqual(countLetters("LHL"), ({ L: 2, H: 1 }));