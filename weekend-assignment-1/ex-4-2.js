// If 'n' is 0, return an empty array (or NULL).
// to store the Thribonacci sequence = array
// for loop to generate the remaining elements of the sequence-Continue until I have generated 'n' elements
// Append the calculated number to the sequence
// Return the generated Tribonacci sequence
// output example:
// console.log(tribonacci([1, 1, 1], 5));
// Output: [1, 1, 1, 3, 5]

function tribonacci(array, number) {
  number = Math.max(number, 1);

  let startTribonacci = array.slice(0, 3);

  for (let i = 3; i < number; i++) {
    let currentNumber =
      startTribonacci[i - 1] + startTribonacci[i - 2] + startTribonacci[i - 3];
    startTribonacci.push(currentNumber);
  }
  return startTribonacci.slice(0, number);
}

console.log(tribonacci([1, 1, 1], 0));
// Output: []

console.log(tribonacci([1, 1, 1], 1));
// Output: [1]

console.log(tribonacci([1, 1, 1], 5));
// Output: [1, 1, 1, 3, 5]

console.log(tribonacci([0, 0, 1], 10));
// Output: [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]
