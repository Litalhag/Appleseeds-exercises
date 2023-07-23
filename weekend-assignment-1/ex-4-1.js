// Fibonacci sequence - series of numbers where each number is the sum of the two preceding numbers before.
// example: starting point is 0 and 1 = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// example: starting point is 1 and 1 = 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
// input = n which represents the value of the index/position in the Fibonacci sequence.
// parameter number = denotes how many numbers in the sequence we have to display
// for example if n=5, we want to find the value of the 5th element in the Fibonacci sequence
// functions returns an array of fibonacci sequence with the same length

function Fibonacci(number) {
  number = Math.max(number, 1);

  let startFibonacci = [0, 1];
  let firstNumber = startFibonacci[0];
  let secondNumber = startFibonacci[1];
  for (let i = 2; i < number; i++) {
    let currentNumber = firstNumber + secondNumber;
    startFibonacci.push(currentNumber);
    firstNumber = secondNumber;
    secondNumber = currentNumber;
  }
  return startFibonacci;
}

console.log(Fibonacci(2));
console.log(Fibonacci(3));
console.log(Fibonacci(5));
console.log(Fibonacci(7));

// shorter solution:
// function fibonacciSeq(n) {
//   let array = [0, 1];
//   for (let i = 2; i < n; i++) {
//     array[i] = array[i - 1] + array[i - 2];
//   }
//   return fibonacciSeq;
// }

// console.log(fibonacciSeq(2));
// console.log(fibonacciSeq(3));
// console.log(fibonacciSeq(5));
// console.log(fibonacciSeq(7));
