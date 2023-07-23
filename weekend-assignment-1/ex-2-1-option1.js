function lowerNumSum(numbers) {
  let num1 = numbers[0];
  let num2 = numbers[1];

  if (num2 < num1) {
    [num1, num2] = [num2, num1];
  }

  for (let i = 2; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    if (currentNumber < num1) {
      num2 = num1;
      num1 = currentNumber;
    } else if (currentNumber < num2) {
      num2 = currentNumber;
    }
  }

  return num1 + num2;
}

console.log(lowerNumSum([19, 5, 42, 2, 77])); // Output: 7
console.log(lowerNumSum([10, 343, 35, 53])); // Output: 3453455
