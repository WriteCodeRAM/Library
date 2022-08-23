const authorInput = document.querySelector('#author_name');
const titleInput = document.querySelector('#book_title');
const pageInput = document.querySelector('#pages');
const checkboxInput = document.querySelector('#checkbox');
const submitButton = document.querySelector('#submit');

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  //basic validation
  if (titleInput.value || authorInput.value || pageInput.value) {
    const newBook = new Book(
      titleInput.value,
      authorInput.value,
      pageInput.value,
      checkboxInput.checked
    );
    //insert book into array
    myLibrary.push(newBook);
  } else {
    alert('please fill out all *required* fields');
  }

  console.log(myLibrary);
  //reset form inputs
  document.getElementById('myform').reset();
}

submitButton.addEventListener('click', addBookToLibrary);

//Todos

//loop through array and display each book on the page using cards
//add a new book button that brings up a form allowing users to input details for new book
// add a button on each book's display to remove book from library
//add a button on each book display to change its read status
