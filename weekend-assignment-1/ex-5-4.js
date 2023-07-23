// toWeirdCase=(s)=>[...s].map((e,i)=>i%2?e.toLowerCase():e.toUpperCase()).join('');

// function weirdCase(str) {
//   return str
//     .split(" ")
//     .map((word) =>
//       word
//         .split("")
//         .map((letter, index) =>
//           index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
//         )
//         .join("")
//     )
//     .join(" ");
// }

function weirdCase(str) {
  return str.replace(
    /./g,
    (
      matchChar,
      index // /./g = represent a global search for any character in a string
    ) => (index % 2 === 0 ? matchChar.toUpperCase() : matchChar.toLowerCase())
  );
}

console.log(weirdCase("String"));
