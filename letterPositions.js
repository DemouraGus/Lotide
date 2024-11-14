const assertArraysEqual = function(arr1, arr2) {

  const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false
      }
    }

    return true;
  }

 // console.log(eqArrays([1, 2, 3], [1, 2, 3]));

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`)
  }
};

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
    // console.log(results[sentence[i]]);  // if (resl)
    if (results[sentence[i]] === undefined) {
      results[sentence[i]] = [i]
    } else {
      results[sentence[i]].push(i)
    }
      // results[sentence[i]] = (results[sentence[i]] || 0) + [i];
    }
  }

  return results;
}

// console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").e, [1]);