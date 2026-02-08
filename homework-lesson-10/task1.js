const Book = require("./Book");
const EBook = require("./EBook");

const book1 = new Book("A Space Odyssey", "Arthur C. Clarke", 1968);
const book2 = new Book("Final Curtain", "Agatha Christie", 2005);

const ebook1 = new EBook("Don Quixote", "Miguel de Cervantes", 1971, "PDF");

book1.printInfo();
book2.printInfo();
ebook1.printInfo();

ebook1.fileFormat = "EPUB";
console.log(ebook1.fileFormat);

const books = [book1, book2, ebook1];
const oldestBook = Book.findOldestBook(books);
console.log("oldest book:");
oldestBook.printInfo();

const ebookFromBook = EBook.fromBook(book1, "PDF");
ebookFromBook.printInfo();