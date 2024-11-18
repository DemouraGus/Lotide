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

module.exports = middle;