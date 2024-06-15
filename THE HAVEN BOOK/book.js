function addBook() {
  const bookTitle = prompt("What is the name of the book?");

  if (bookTitle) {
    const ol = document.getElementById('book-list');
    const li = document.createElement('li');

    li.textContent = bookTitle;
    ol.appendChild(li);
  }
}
