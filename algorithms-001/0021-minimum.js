//
// The minimum function takes an array of numbers as an argument and returns the minimum number in the array.
//
// Example:
//
//   minimum([2, 1, 3, 4])   // returns 1
//   minimum([5, 2, 8, 2, 9])   // returns 2
//

function minimum(array) {
  var i = 0;
  var min = 100000000000 // a really big number that is bigger than any number in the array

  while (i < array.length) {
    if (array[i] < min) {
      min = array[i];
    }

    i = i + 1;
  }

  return min;
}

console.log(minimum([2, 1, 3, 4]));   // returns 1
