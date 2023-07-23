function sorting(s1, s2) {
  const mergedArr = s1.split(" ") + s2.split(" ");
  const uniqueArr = [...new Set(mergedArr)]; // new Set ensures that no duplicate values are stored in the set
  const finalStr = uniqueArr.sort().join("");
  return finalStr;
}

console.log(sorting("xyaabbbccccdefww", "xxxxyyyyabklmopq")); // “abcdefklmopqwxy"

// const arrA = s1.split("");
// const arrB = s2.split("");
// const mergedArr = [...arrA, ...arrB]; //spread operator combines 2 arrays
