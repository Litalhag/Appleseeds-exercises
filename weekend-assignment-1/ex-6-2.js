function countAlphabeticChars(chars) {
  chars = chars.toLowerCase();
  const arr = chars.split("");
  // console.log(arr);
  const count = {};
  arr.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
  });
  return count;
}

console.log(countAlphabeticChars("aabbcde"));
console.log(countAlphabeticChars("ABBA"));
console.log(countAlphabeticChars("aA11"));
