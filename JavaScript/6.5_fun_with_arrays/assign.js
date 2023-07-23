const array = [
  { key: "name", value: "John" },
  { key: "age", value: 30 },
  { key: "city", value: "New York" },
];

const object1 = array.reduce(function (acc, { key, value }) {
  acc[key] = value;
  return acc;
}, {});

const object = array.reduce((acc, { key, value }) => {
  acc[key] = value;
  return acc;
}, {});

console.log(object1);
