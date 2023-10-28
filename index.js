function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((data) => {
      renderBooks(data);
    });
}

function renderBooks(books) {
  const bookList = document.getElementById("book-list");

  books.forEach((book) => {
    const bookTitle = document.createElement("li");
    bookTitle.textContent = book.name;
    bookList.appendChild(bookTitle);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks(); 
});