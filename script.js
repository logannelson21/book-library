/* data structures */

let myLibrary;
const DEFAULT_DATA = [{title: 'The Hobbit', author: 'Tolkien', isRead: 'read' }, {title: 'Meditations', author: 'Marcus Aurelius', isRead: 'read'}, {title: 'How to Change Your Mind', author: 'Micheal Pollan', isRead:'read'}];

const title = document.getElementById('title');
const author = document.getElementById('author');
const isRead = document.getElementById('isRead');
const table = document.getElementById('table');
const form = document.getElementById('form').addEventListener('submit', (e) =>{
    e.preventDefault();
    addBookToLibrary();

})

class Book {
    constructor(name, author, isRead){
        this.name = name;
        this.author = author;
        this.isRead = isRead;
    }
}


/* display function */

function addBookToLibrary() {
    if (title.value.length === 0 || author.value.length === 0) {
        alert('Please fill all fields');
        return;
    }
    const newBook = new Book(title.value, author.value, isRead.value);
    myLibrary.push(newBook);
}
