// create a function that takes a number as a parameter and returns the next perfect square after that number.
// if there's non number like that- we'll return -1.
// use mathematical method that check if the square root of a number is an integer
// I should use Math. sqrt()” method and add an if-else statement to check the perfect square condition

// checking if the number is positive
// if (n < 0) {
//   return false;
// }

// using Math.sqrt() to square root the input
// Math.sqrt(n);

// check if the result is a whole number
// Number.isInteger(Math.sqrt(n));

// if the square root result is a whole number- true, else- false
// if (Number.isInteger(Math.sqrt(n))) {
//   return true;
// } else {
//   return false;
// }

// function:
function nextPerfectSquare(number) {
  const square = Math.sqrt(number);

  if (Number.isInteger(Math.sqrt(number))) {
    return (nextNumber = (Math.sqrt(number) + 1) * (Math.sqrt(number) + 1));
  } else {
    return -1;
  }
}

console.log(nextPerfectSquare(4));
console.log(nextPerfectSquare(9));
console.log(nextPerfectSquare(16));
console.log(nextPerfectSquare(25));
console.log(nextPerfectSquare(625));
console.log(nextPerfectSquare(121));
console.log(nextPerfectSquare(114));
