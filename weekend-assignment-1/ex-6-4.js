function isIsogram(string) {
  const arr = string.split("");
  const newArr = arr.every((char, index) => string.indexOf(char) == index);
  return newArr;
}

console.log(isIsogram("abbsd"));
console.log(isIsogram("absd"));

//  arrow function:
const isIsogramStr = (string) =>
  string.split("").every((char, index) => string.indexOf(char) == index);
console.log(isIsogramStr("abbsd"));
console.log(isIsogramStr("absd"));
