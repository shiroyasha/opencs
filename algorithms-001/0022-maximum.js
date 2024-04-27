//
// The maximum function takes an array of numbers as an argument and returns the maximum number in the array.
//
// Example:
//   maximum([2, 1, 3, 4])      // returns 4
//   maximum([5, 2, 8, 2, 9])   // returns 9
//   maximum([1, 3, 5, 7])      // returns 7
//

function maximum(array) {
  var i = 0;
  var max = -100000000000 // a really small number that is smaller than any number in the array

  while (i < array.length) {
    if (array[i] > max) {
      max = array[i];
    }

    i = i + 1;
  }

  return max;
}

console.log(maximum([2, 1, 3, 4]));      // returns 4
