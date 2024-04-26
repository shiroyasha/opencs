//
// The factorial function takes a number n as an argument and returns the factorial of n.
//
// Example:
//
//   factorial(4);   // returns 24
//   factorial(6);   // returns 720
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

console.log(factorial(4));   // displays 24
