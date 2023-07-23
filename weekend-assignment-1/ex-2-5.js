// writing a function called summation that calculates the summation of every number from 1 to a given positive integer num.
// the function will take num as a parameter, which represents the positive integer greater than 0.
// goal = is to calculate the sum of all numbers from 1 to num, inclusive.
// calculate the summation, we need to add up all the numbers starting from 1 and going up to num.
// the parameter "number" will represents the positive integer greater than 0.
// a variable named 'total'= 0  to keep track of the running sum
// for loop to iterate over the numbers from 1 to num
// i in the for loop will represent each number in the iteration
// After the loop completes, total will contain the summation of all the numbers from 1 to number
// Return total as the result of the summation function

function summation(number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total += i;
  }
  return total;
}

console.log(summation(8));
console.log(summation(20));

// other optional solutions:
/*  function summation(num) {
  return (num * (num + 1)) / 2;
}*/

/* function summation(num) {
  if (num === 1) {
    return 1;
  }
  return num + summation(num - 1);
}
 */

/* function summation(num) {
  return Array.from({ length: num }, (_, i) => i + 1).reduce((acc, curr) => acc + curr, 0);
}
 */
