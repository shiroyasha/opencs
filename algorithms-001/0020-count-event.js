//
// The countEvent function takes an array of numbers as an argument and returns the count of even numbers in the array.
//
// Example:
//
//   countEvent([1, 2, 3, 4])      // returns 2
//   countEvent([5, 1, 8, 2, 9])   // returns 2
//   countEvent([1, 3, 5, 7])      // returns 0
//

function countEvent(array) {
  var i = 0;
  var count = 0;

  while (i < array.length) {
    if (array[i] % 2 === 0) {
      count = count + 1;
    }

    i = i + 1;
  }

  return count;
}

console.log(countEvent([1, 2, 3, 4]));      // returns 2
