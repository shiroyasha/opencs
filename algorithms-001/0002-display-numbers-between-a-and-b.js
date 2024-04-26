// 
// The display function takes two numbers a and b as arguments and displays all numbers between a and b.
//
// Example:
//   display(1, 4);
//
//   Output:
//   1
//   2
//   3
//   4
//
//   display(3, 6);
//
//   Output:
//   3
//   4
//   5
//   6
// 

function display(a, b) {
  var i = a;

  while (i <= b) {
    console.log(i);
    i = i + 1;
  }
}

display(1, 4);
