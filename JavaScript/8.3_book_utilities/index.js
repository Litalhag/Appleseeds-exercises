const book1 = {
  bookName: "Safari",
  authorName: "Jack Morison",
  publishingYear: "1990",
};

const book2 = {
  bookName: "Luna",
  authorName: "Kate Bush",
  publishingYear: "1980",
};

// creating an empty object
const bookUtils = {};

// adding to 'bookUtils' object a function getFirstPublished, that receives 2 books and returns the book with the smaller year
bookUtils.getFirstPublished = function (book1, book2) {
  return book1.publishingYear > book2.publishingYear ? book2 : book1;
};

console.log(bookUtils.getFirstPublished(book1, book2));

// creating a function that added as a method to the 'bookUtils' object. function receives one of the book objects and editionYear both as arguments:
bookUtils.setNewEdition = function (book, editionYear) {
  book.latestEdition = editionYear; //'latestEdition' added as an object property which equal to the editionYear
};

bookUtils.setNewEdition(book1, "1999");
console.log(book1);

bookUtils.setNewEdition(book2, "2000");
console.log(book2);

// add to the bookUtils object a setLanguage function
bookUtils.setLanguage = function (book, language) {
  book.language = language; // language and sets a new property
};

bookUtils.setLanguage(book1, "German");
console.log(book1);

bookUtils.setLanguage(book2, "Dutch");
console.log(book2);

// adding object properties (6)
bookUtils.setTranslation = function (book, language, translator) {
  book.translator = { language, translator }; //shorthand instead of {language: language...}
};

bookUtils.setTranslation(book1, "Russian", "Vlad Timotty");
console.log(book1);

bookUtils.setTranslation(book2, "Indian", "Chuko Plandra");
console.log(book2);

//  (7)
bookUtils.setPublisher = function (book, name, location) {
  book.publisher = { name, location }; //shorthand instead of {name: name...}
};

bookUtils.setPublisher(book1, "Lulu", "Never Land");
console.log(book1);

bookUtils.setPublisher(book2, "Lala", "Chacha Land");
console.log(book2);

/* {
  bookName: 'Safari',
  authorName: 'Jack Morison',
  publishingYear: '1990',
  latestEdition: '1999',
  language: 'German',
  translator: { language: 'Russian', translator: 'Vlad Timotty' },
  publisher: { name: 'Lulu', location: 'Never Land' }
}
{
  bookName: 'Luna',
  authorName: 'Kate Bush',
  publishingYear: '1980',
  latestEdition: '2000',
  language: 'Dutch',
  translator: { language: 'Indian', translator: 'Chuko Plandra' },
  publisher: { name: 'Lala', location: 'Chacha Land' }
} */
// (8)
bookUtils.isSamePublisher = function (book1, book2) {
  return (
    book1.publisher.name === book2.publisher.name &&
    book1.publisher.location === book2.publisher.location
  );
};

console.log(bookUtils.isSamePublisher(book1, book2));
