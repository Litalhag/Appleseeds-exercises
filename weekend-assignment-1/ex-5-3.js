// Input: "hello-world"
// Output: "helloWorld"

// const word = "hello-world";
// const word2 = word.replace("-", " ");
// console.log(word2);

// console.log(toCamelCase("hello-world"));
function toCamelCase(str) {
  let newStr = "";
  if (str) {
    let wordArr = str.split(/[-_]/);
    console.log(wordArr);
    for (let i in wordArr) {
      if (i > 0) {
        newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
        // console.log(newStr)
        // console.log(wordArr[i]);
        // console.log(wordArr[i].charAt(0));
        // console.log(wordArr[i].charAt(0).toUpperCase());
        // console.log(wordArr[i].slice());
      } else {
        newStr += wordArr[i];
      }
    }
  } else {
    return newStr;
  }
  return newStr;
}

console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("the-stealth-warrior"));
