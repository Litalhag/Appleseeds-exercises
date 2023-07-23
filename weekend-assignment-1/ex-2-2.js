function binaryArrayToDecimal(binaryArray) {
  // hold the decimal value
  let decimal = 0;
  // Iterate over the binary array
  for (let i = 0; i < binaryArray.length; i++) {
    decimal = decimal * 2 + binaryArray[i];
    // decimal = 0 * 2 + 0 = 2
    // decimal = 1 * 2 + 1 = 4
    // decimal = 0 * 2 + 2 = 2
    // decimal = 1 * 2 + 3 = 5
  }

  return decimal;
}

// array index-------0  1  2  3
const binaryArray = [0, 1, 0, 1];
const decimalValue = binaryArrayToDecimal(binaryArray);
console.log(decimalValue); // Output: 5
