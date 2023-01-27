/* array for library */
let myLibrary = [{title: 'The Hobbit', author: 'Tolkien', isRead: 'read' }, {title: 'Meditations', author: 'Marcus Aurelius', isRead: 'read'}, {title: 'How to Change Your Mind', author: 'Micheal Pollan', isRead:'not read'}];

/* object constructor */
function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
}

/* pushes book to the array */
function addBookToLibrary(title, author, isRead) {
    let book = new Book(title, author, isRead);
    myLibrary.push(book);
}

/* display books in html table */






