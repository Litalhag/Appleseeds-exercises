const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function counter(array) {
  const object = {};

  for (let i = 0; i < array.length; i++) {
    const string = array[i].toLowerCase();

    for (let j = 0; j < string.length; j++) {
      const letter = string[j];

      if (object[letter]) {
        object[letter]++;
      } else {
        object[letter] = 1;
      }
    }
  }

  return object;
}

const letters = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
const result = counter(letters);
console.log(result);
