//
// The sum function takes a number n as an argument and returns the sum of all numbers from 1 to n.
//
// Example:
//  sum(4);   // returns 10
//  sum(6);   // returns 21
//

function sum(n) {
  var i = 1;
  var res = 0;

  while (i <= n) {
    res = res + i;
    i = i + 1;
  }

  return res;
}

console.log(sum(4));   // displays 10
