/* data structures */

let myLibrary = [{title: 'The Hobbit', author: 'Tolkien', isRead: 'read' }, {title: 'Meditations', author: 'Marcus Aurelius', isRead: 'read'}, {title: 'How to Change Your Mind', author: 'Micheal Pollan', isRead:'not read'}];

const title = document.getElementById('title');
const author = document.getElementById('author');
const isRead = document.getElementById('isRead');
const tableBody = document.getElementById('book-table-body');
const form = document.getElementById('form').addEventListener('submit', (e) =>{
    e.preventDefault();
    addBookToLibrary();

})

/* object constructor */

function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
}




/* pushes book to the array */




