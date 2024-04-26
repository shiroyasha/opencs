//
// The sumOfPowers function takes a number n and a number p as arguments and returns the sum of the powers of all numbers from 1 to n.
// The formula for the sum of powers is:
//
// 1^p + 2^p + 3^p + ... + n^p
//

function pow(base, exponent) {
  var i = 1;
  var res = 1;

  while (i <= exponent) {
    res = res * base;
    i = i + 1;
  }

  return res;
}

function sumOfPowers(n, p) {
  var i = 1;
  var res = 0;

  while (i <= n) {
    res = res + pow(i, p);
    i = i + 1;
  }

  return res;
}

console.log(sumOfPowers(4, 2));   // displays 30
