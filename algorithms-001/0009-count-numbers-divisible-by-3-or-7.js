//
// The count function takes a number n as an argument and returns the number of numbers between 1 and n that
// are divisible by 3 or 7.
//
// Example:
//    count(10);   // returns 2
//    count(20);   // returns 5
//    count(30);   // returns 8
//

function count(n) {
  var i = 1;
  var count = 0;

  while (i <= n) {
    if (i % 3 === 0 || i % 7 === 0) {
      count = count + 1;
    }
    i = i + 1;
  }

  return count;
}

console.log(count(100));   // displays 43
