function boolean(value) {
  return value ? "yes" : "no";
}

console.log(boolean(true));
console.log(boolean(false));

// arrow function:
const boolean2 = (value) => (value ? "yes" : "no");
console.log(boolean2(true));
console.log(boolean2(false));
