//
// The productElements function takes an array of numbers as an argument and returns the product of all elements of the array.
//
// Example:
//
//   productElements([1, 2, 3, 4])   // returns 24
//   productElements([5, 1, 8, 2, 9])   // returns 720
//

function productElements(array) {
  var i = 0;
  var res = 1;

  while (i < array.length) {
    res = res * array[i];
    i = i + 1;
  }

  return product;
}

console.log(productElements([1, 2, 3, 4]));   // returns 24
