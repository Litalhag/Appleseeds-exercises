// const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function charCount(str) {
  str = str.toLowerCase();
  const obj = {};
  for (let i = 0; i < array.length; i++);
  for (let i = 0; j < str.length; j++) {
    const char = array[j];
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
    return obj;
  }
}

const str = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
console.log(str);
