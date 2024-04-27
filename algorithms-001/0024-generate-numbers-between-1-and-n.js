//
// The generateNumbers function takes a number n as an argument and returns an array of numbers from 1 to n.
//
// Example:
//
//   generateNumbers(4)      // returns [1, 2, 3, 4]
//   generateNumbers(6)      // returns [1, 2, 3, 4, 5, 6]
//

function generateNumbers(n) {
  var i = 1;
  var numbers = [];

  while (i <= n) {
    numbers.push(i);
    i = i + 1;
  }

  return numbers;
}

console.log(generateNumbers(4));      // returns [1, 2, 3, 4]
