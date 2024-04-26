//
// The sumOfCubes function takes a number n as an argument and returns the sum
// of the cubes of all numbers from 1 to n.
//
// The formula for the sum of squares is:
//
// 1^3 + 2^3 + 3^3 + ... + n^3
//
// Example:
//
//   sumOfCubes(4);   // returns 100
//   sumOfCubes(6);   // returns 441
//   sumOfCube(10);   // returns 3025
//

function sumOfCubes(n) {
  var i = 1;
  var res = 0;

  while (i <= n) {
    res = res + (i * i * i);
    i = i + 1;
  }

  return res;
}

console.log(sumOfCubes(4));   // displays 100
