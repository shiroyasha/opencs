//
// The sumOfSquares function takes a number n as an argument and returns the sum 
// of the squares of all numbers from 1 to n.
//
// The formula for the sum of squares is:
//
// 1^2 + 2^2 + 3^2 + ... + n^2
//
// Example:
//
//   sumOfSquares(4);   // returns 30
//   sumOfSquares(6);   // returns 91
//   sumOfSquares(10);  // returns 385
//

function sumOfSquares(n) {
  var i = 1;
  var res = 0;

  while (i <= n) {
    res = res + (i * i);
    i = i + 1;
  }

  return res;
}

console.log(sumOfSquares(4));   // displays 30
