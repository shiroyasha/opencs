//
// The sumOfFactorials function takes a number n as an argument and returns the sum
// of the factorials of all numbers from 1 to n.
//
// The formula for the sum of factorials is:
//
// 1! + 2! + 3! + ... + n!
//
// Example:
//
//   sumOfFactorials(4);   // returns 33
//   sumOfFactorials(6);   // returns 873
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

function sumOfFactorials(n) {
  var i = 1;
  var res = 0;

  while (i <= n) {
    res = res + factorial(i);
    i = i + 1;
  }

  return res;
}

console.log(sumOfFactorials(4));   // displays 33
