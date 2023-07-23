function colorChoice(color) {
  color = color.toLowerCase();

  switch (color) {
    case "yellow":
    case "pink":
    case "orange":
      return "light color";
    case "blue":
    case "purple":
    case "brown":
      return "dark color";
    default:
      return "Unknown color";
  }
}

console.log(colorChoice("yellow"));
console.log(colorChoice("pink"));
console.log(colorChoice("orange"));
console.log(colorChoice("blue"));
console.log(colorChoice("purple"));
console.log(colorChoice("brown"));
console.log(colorChoice("black"));
