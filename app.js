const authorInput = document.querySelector('#author_name');
const titleInput = document.querySelector('#book_title');
const pageInput = document.querySelector('#pages');
const checkboxInput = document.querySelector('#checkbox');

const submitButton = document.querySelector('#submit');
const bookContainer = document.querySelector('.book-container');
const card = document.querySelector('.card');
const form = document.querySelector('#myform');

const newBookBtn = document.querySelector('.new-book');
const modal = document.querySelector('.modal');

newBookBtn.addEventListener('click', () => {
  modal.classList.remove('hide');
});

modal.addEventListener('click', (e) => {
  modal.classList.add('hide');
});

document.querySelector('.modal form').addEventListener('click', (e) => {
  e.stopPropagation();
});

let myLibrary = [];
// { title: 'randal', author: 'goat', pages: 21, read: true }

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  //basic validation
  if (
    titleInput.value &&
    authorInput.value &&
    pageInput.value > 0 &&
    pageInput <= 10000
  ) {
    const newBook = new Book(
      titleInput.value,
      authorInput.value,
      pageInput.value,
      checkboxInput.checked
    );
    //insert book into array
    myLibrary.push(newBook);
    displayBook(myLibrary);
  } else {
    alert('please fill out all *required* fields, max page number is 10000');
  }
  //reset form inputs
  document.getElementById('myform').reset();
}

submitButton.addEventListener('click', addBookToLibrary);

//Todos

//loop through array and display each book on the page using cards
let i = 0;
function displayBook(arr) {
  for (i; i < arr.length; i++) {
    let div = document.createElement('div');
    div.classList.add('card');
    bookContainer.appendChild(div);

    let ul = document.createElement('ul');
    let li0 = document.createElement('li');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');

    // programmatic approach
    // for (const [key, value] of Object.entries(arr[i])) {
    //   console.log(`${key}: ${value}`);
    // }
    li0.innerText = `Title: ${arr[i].title}`;
    li1.innerText = `Author: ${arr[i].author}`;
    li2.innerText = `# Of Pages: ${arr[i].pages}`;
    li3.innerText = `Read it already? ${arr[i].read}`;

    ul.appendChild(li0);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    div.appendChild(ul);
    modal.classList.add('hide');
    // });
  }
}

//add a new book button that brings up a form(modal) allowing users to input details for new book

newBookBtn.addEventListener('click', showForm);

function showForm() {
  form.classList.add('show');
}

// add a button on each book's display to remove book from library

//add a button on each book display to change its read status
