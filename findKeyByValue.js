const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const priceOfFruits = {
  apple: 0.60,
  avocado: 2.5,
  lemon: 0.90,
  lime: 1.10
};

assertEqual(findKeyByValue(priceOfFruits, 0.60), "apple");
assertEqual(findKeyByValue(priceOfFruits, 0.90), "lemon");
assertEqual(findKeyByValue(priceOfFruits, 1.50), undefined);