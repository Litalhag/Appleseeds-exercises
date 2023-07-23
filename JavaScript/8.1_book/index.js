const book = {
  bookName: "Safari",
  authorName: "Jack Morison",
  publishingYear: "1990",
};

function bookDescription(book) {
  return `the book ${book.bookName} was written by ${book.authorName} in the year ${book.publishingYear}`;
}

console.log(bookDescription(book));
