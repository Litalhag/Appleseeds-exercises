// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII" repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// regular function
function repeatString(num, str) {
  return str.repeat(num);
}

console.log(repeatString(6, "I"));

// arrow function
const repeating = (num, str) => str.repeat(num);
console.log(repeating(6, "I"));
