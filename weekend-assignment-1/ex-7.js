// filter, map, forEach
// filter method implementation:
const someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.myFilter = function (callback) {
  let array = [];
  for (let i = 0; i < this.length; i += 1) {
    if (callback(this[i])) {
      array.push(this[i]);
    }
  }
  return array;
};

// a test
const arrFiltered = someArr.myFilter(function (element) {
  return element % 2 === 0;
});

console.log(arrFiltered);

// map method implementation:
Array.prototype.myMap = function (callback) {
  let array = [];
  for (let i = 0; i < this.length; i += 1) {
    array.push(callback(this[i]));
  }
  return array;
};

// a test
const arrMapped = someArr.myMap(function (element) {
  return element * 2;
});

console.log(arrMapped);

// forEach method implementation:
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i += 1) {
    callback(this[i], i, this);
  }
};

// a test
const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];

books.myForEach(function (book) {
  console.log(book.title.toUpperCase());
});
