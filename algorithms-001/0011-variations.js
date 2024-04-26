//
// The variations function takes numbers N and K as arguments,
// and returns the number of variations without repetition.
// 
// The formula for the number of variations without repetition is:
//
// V = N! / (N - K)!
//
// Example:
//
//   variations(5, 3);   // returns 60
//   variations(6, 2);   // returns 30
//   variations(7, 4);   // returns 840
//

function factorial(n) {
  var i = 1;
  var res = 1;

  while (i <= n) {
    res = res * i;
    n = n + 1;
  }

  return res;
}

function variations(n, k) {
  return factorial(n) / factorial(n - k);
}

console.log(variations(5, 3));   // displays 60
