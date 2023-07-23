// create a function that performs four basic arithmetic operations on two values based on the specified operation.
// inputs:
// operation- addition (+), subtraction (-), multiplication (*), and division (/)-as a string
// value1 (the first number)
// value2 (the second number)
// if operation = '+' then value1 + value2
// if operation = '-' then value1 - value2
// if operation = '*' then value1 * value2
// if operation = '/' then value1 / value2

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return "Invalid operation";
  }
}

console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));
