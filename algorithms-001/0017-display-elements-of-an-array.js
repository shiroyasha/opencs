//
// The displayElements function takes an array of numbers as an argument and displays all elements of the array.
//
// Example:
//
//   displayElements([1, 2, 3, 4]);
//
//   Output:
//   1
//   2
//   3
//   4
//
//   displayElements([5, 1, 8, 2, 9]);
//
//   Output:
//   5
//   1
//   8
//   2
//

function displayElements(array) {
  var i = 0;

  while (i < array.length) {
    console.log(array[i]);
    i = i + 1;
  }
}

displayElements([1, 2, 3, 4]);
