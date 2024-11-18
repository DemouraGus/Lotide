const assertEqual = require("./assertEqual")

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    } 
  }  
  return undefined
};

module.exports = findKey;

const restaurantStars = {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  };

const priceOfFruits = {
  apple: 0.60,
  avocado: 2.5,
  lemon: 0.90,
  lime: 1.10
};

assertEqual(findKey(restaurantStars, x => x.stars === 2), "noma");
assertEqual(findKey(priceOfFruits, x => x > 2), "avocado");
