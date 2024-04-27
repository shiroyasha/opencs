//
// The generateFactorials function takes a number n as an argument and returns an array of factorials from 1 to n.
//
// Example:
//   generateFactorials(4)      // returns [1, 2, 6, 24]
//   generateFactorials(6)      // returns [1, 2, 6, 24, 120, 720]
//

function factorial(n) {
  var i = 1;
  var res = 1;

  while (i <= n) {
    res = res * i;
    i = i + 1;
  }

  return res;
}

function generateFactorials(n) {
  var i = 1;
  var factorials = [];

  while (i <= n) {
    factorials.push(factorial(i));
    i = i + 1;
  }

  return factorials;
}

console.log(generateFactorials(4));      // returns [1, 2, 6, 24]
