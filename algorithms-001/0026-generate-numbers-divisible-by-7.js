//
// The generateNumbersDivisibleBy7 function takes a number n as an argument and returns an array of numbers from 1 to n that are divisible by 7.
//
// Example:
//   generateNumbersDivisibleBy7(50)   // returns [7, 14, 21, 28, 35, 42, 49]
//   generateNumbersDivisibleBy7(100)  // returns [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98]
//

function generateNumbersDivisibleBy7(n) {
  var i = 1;
  var numbers = [];

  while (i <= n) {
    if (i % 7 === 0) {
      numbers.push(i);
    }

    i = i + 1;
  }

  return numbers;
}

console.log(generateNumbersDivisibleBy7(50));   // returns [7, 14, 21, 28, 35, 42, 49]
