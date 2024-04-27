//
// The generateNumbersBetween function takes two numbers a and b as arguments and returns an array of numbers from a to b.
//
// Example:
//   generateNumbersBetween(2, 5)      // returns [2, 3, 4, 5]
//   generateNumbersBetween(3, 8)      // returns [3, 4, 5, 6, 7, 8]
//   generateNumbersBetween(1, 3)      // returns [1, 2, 3]
//

function generateNumbersBetween(a, b) {
  var i = a;
  var numbers = [];

  while (i <= b) {
    numbers.push(i);
    i = i + 1;
  }

  return numbers;
}

console.log(generateNumbersBetween(2, 5));      // returns [2, 3, 4, 5]
