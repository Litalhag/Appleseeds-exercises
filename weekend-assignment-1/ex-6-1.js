function repeatStr(string) {
  const result = [];
  for (let i = 0; i < string.length; i++) {
    const newStr = string[i].toLowerCase();
    let word = "";
    for (let j = 0; j <= i; j++) {
      word += newStr;
    }
    word = word.charAt(0).toUpperCase() + word.slice(1);
    result.push(word);
  }
  return result.join("-");
}

console.log(repeatStr("RqaEzty"));
