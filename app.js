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

//add a new book button that brings up a form(modal) allowing users to input details for new book
newBookBtn.addEventListener('click', showForm);

function showForm() {
  form.classList.add('show');
}

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

//Constructor
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
    pageInput.value <= 10000
  ) {
    const newBook = new Book(
      titleInput.value,
      authorInput.value,
      pageInput.value,
      checkboxInput.checked
    );
    //insert book into array
    myLibrary.push(newBook);
    history.push(newBook);
    displayBook(myLibrary);
  } else {
    alert('fill out all *required* fields, max page number set at 10000');
  }
  //reset form inputs
  document.getElementById('myform').reset();
}

submitButton.addEventListener('click', addBookToLibrary);

//Todos

//loop through array and display each book on the page using cards

//history fixes bug with users deleting and no longer being able to add to library
let history = [];
let i = 0;

function displayBook(arr) {
  for (i; i < history.length; i++) {
    console.log(i);
    let div = document.createElement('div');
    div.setAttribute('index', i);
    div.classList.add('card');
    bookContainer.appendChild(div);
    let readStatusBtn = document.createElement('button');
    readStatusBtn.classList.add('readBtn');
    readStatusBtn.innerText = 'READ';

    //connecting trash icon to card
    const deleteBookBtn = document.createElement('img');

    let div2 = document.createElement('div');
    div2.classList.add('div2');
    deleteBookBtn.setAttribute('src', 'icons8-trash.svg');
    deleteBookBtn.setAttribute('index', i);
    deleteBookBtn.classList.add('trash');

    let ul = document.createElement('ul');
    let li0 = document.createElement('li');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');

    // programmatic approach
    // for (const [key, value] of Object.entries(arr[i])) {
    //   console.log(`${key}: ${value}`);
    // }
    li0.innerText = `Title: ${history[i].title}`;
    li1.innerText = `Author: ${history[i].author}`;
    li2.innerText = `# Of Pages: ${history[i].pages}`;
    li3.innerText = `Read it already? ${history[i].read}`;

    ul.appendChild(li0);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    div2.appendChild(readStatusBtn);
    div2.appendChild(deleteBookBtn);
    div.appendChild(ul);
    // div.appendChild(deleteBookBtn);
    div.appendChild(div2);
    modal.classList.add('hide');

    // add a button on each book's display to remove book from library
    //had to nest function because of scoping issues with deleteBtn
    function removeBookFromLibrary() {
      const index = deleteBookBtn.getAttribute('index');
      myLibrary.pop(index);

      const selectedCard = document.querySelector(`[index="${index}"]`); // select with "index" set to "i" exactly.

      selectedCard.remove();
    }

    deleteBookBtn.addEventListener('click', removeBookFromLibrary);
  }
}

//LAST STEP
//Figure out how to connect function to each book's .read value
//add a button on each book display to change its read status

Book.prototype.readStatus = function () {};
