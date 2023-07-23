// create a function that removes the first and last characters of a string

// regular function:
function removeChars(string) {
  stringArr = string.split("").slice(1, -1).join("");
  return stringArr;
}

console.log(removeChars("hello")); // 'ell'

// arrow function:
const removeChars2 = (string) => string.split("").slice(1, -1).join("");

console.log(removeChars2("hello")); // 'ell'
