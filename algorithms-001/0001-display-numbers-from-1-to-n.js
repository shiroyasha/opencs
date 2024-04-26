// 
// The display function takes a number n as an argument and displays all numbers from 1 to n.
//
// Example:
//   display(4);
//
//   Output:
//   1
//   2
//   3
//   4
//
//   display(6);
//
//   Output:
//   1
//   2
//   3
//   4
//   5
//   6
// 

function display(n) {
  var i = 1;

  while (i <= n) {
    console.log(i);
    i = i + 1;
  }
}

display(10);
