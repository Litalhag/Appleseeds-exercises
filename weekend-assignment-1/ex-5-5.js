function convertStr(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join(".");
}

console.log(convertStr("Sam Harris"));
console.log(convertStr("Patrick Feeney"));

// arrow function:
const convertStr2 = (str) =>
  str
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join(".");

console.log(convertStr2("Sam Harris"));
console.log(convertStr2("Patrick Feeney"));
