//
// The variations function takes numbers N and K as arguments,
// and returns the number of combinations without repetition.
// 
// The formula for the number of combinations without repetition is:
//
// C = N! / (K! * (N - K)!)
//
// Example:
//
//   combinations(5, 3);   // returns 10
//   combinations(6, 2);   // returns 15
//   combinations(7, 4);   // returns 35
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

function combinations(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}

console.log(combinations(5, 3));   // displays 10
