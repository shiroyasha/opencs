//
// The sumElements function takes an array of numbers as an argument and returns the sum of all elements of the array.
//
// Example:
//   sumElements([1, 2, 3, 4])   // returns 10
//   sumElements([5, 1, 8, 2, 9])   // returns 25
//

function sumElements(array) {
  var i = 0;
  var sum = 0;

  while (i < array.length) {
    sum = sum + array[i];
    i = i + 1;
  }

  return sum;
}

console.log(sumElements([1, 2, 3, 4]));   // returns 10
