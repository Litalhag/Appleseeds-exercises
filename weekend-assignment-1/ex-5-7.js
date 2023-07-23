// string = "everyone loves humburger";

function shortWord(string) {
  strArr = string.split(" ");
  shortestWord = strArr[0];
  for (i = 0; i < strArr.length; i++) {
    if (shortestWord.length > strArr[i].length) {
      shortestWord = strArr[i];
    }
  }
  return shortestWord;
}

console.log(shortWord("everyone loves humburger"));
