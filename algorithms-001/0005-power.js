//
// The pow function takes two numbers a and b as arguments and returns a raised to the power of b.
//
// Example:
//
//   pow(5, 2);   // returns 25
//   pow(2, 3);   // returns 8
//   pow(3, 4);   // returns 81
//

function pow(a, b) {
  var i = 1;
  var res = 1;

  while (i <= b) {
    res = res * a;
    i = i + 1;
  }

  return res;
}

console.log(pow(5, 2));   // displays 25
