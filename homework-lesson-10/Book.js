class Book {
    constructor(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

    get title() {
    return this._title;
    }

    get author() {
        return this._author;
    }

    get year() {
        return this._year;
    }

    set title(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Title must not be empty");
        }
        this._title = value;
    }

    set author(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Author must not be empty");
        }
        this._author = value;
    }

    set year(value) {
        if (typeof value !== "number" || value <= 0) {
            throw new Error("Year must be a positive number");
        }
        this._year = value;
    }

    printInfo() {
        console.log(`${this.title} by ${this.author} was published in ${this.year}`);
    }

    static findOldestBook(books) {
        return books.reduce((oldest, current) => current.year < oldest.year ? current : oldest);
    }
}

module.exports = Book;
