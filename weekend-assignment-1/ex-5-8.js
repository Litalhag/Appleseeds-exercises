function longestWord(string) {
  strArr = string.split(" ");
  longWord = strArr[0];
  for (i = 0; i > strArr.length; i++) {
    if (longWord.length > strArr[i].length) {
      longWord = strArr[i];
    }
  }
  return longWord;
}

console.log(longestWord("everyone loves humburger"));
