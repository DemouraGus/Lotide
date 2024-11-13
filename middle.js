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

  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`)
  }
};

// INPUT: An array of any length
// STEP: Measure the input
// STEP: Return empty array if input has 2 or less elements
// STEP: Determine if array has an odd or even number of elemnts
// STEP: If odd, determine what is the middle element and return that
// STEP: If even, determine what are the two middle elements and return those
// OUTPUT: The middle of the array (one element if original has an odd number of elements, two if even)

const middle = function(array) {
  let middleArray = [];

  if (array.length <= 2) {
    return middleArray;
  } else if (array.length > 2) {
    if (array.length % 2 !== 0) {
      middleArray.push(array[Math.floor(array.length / 2)]);
    } else {
      middleArray.push(array[Math.floor(array.length / 2) - 1], array[Math.floor(array.length / 2)]);
    }
  }
  return middleArray;
};

// console.log(middle([]));
// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3, 4]));
// console.log(middle([1, 2, 3, 4, 5, 6]));

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
