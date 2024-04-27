//
// The average function takes an array of numbers as an argument and returns the average of all elements of the array.
//
// Example:
//   average([1, 2, 3, 4])   // returns 2.5
//   average([5, 1, 8, 2, 9])   // returns 5
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

function average(array) {
  return sumElements(array) / array.length;
}

console.log(average([1, 2, 3, 4]));   // returns 2.5
