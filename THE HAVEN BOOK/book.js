function toggleFavorite(event) {
  const li = event.target.closest("li"); // Find the closest <li> parent element

  if (li) {
    li.classList.toggle("favorite");

    // Toggle the heart icon
    const icon = event.target.querySelector("i");
    if (icon.classList.contains("ri-heart-line")) {
      icon.classList.replace("ri-heart-line", "ri-heart-fill");
    } else {
      icon.classList.replace("ri-heart-fill", "ri-heart-line");
    }
  }
}

function addBook() {
  const bookTitle = prompt("What is the name of the book?");

  if (bookTitle) {
    const ol = document.getElementById("book-list");
    const li = document.createElement("li");
    li.textContent = bookTitle;


    const icon = document.createElement("span");
    icon.classList.add("favorite-icon");
    icon.innerHTML = '<i class="ri-heart-line"></i>';
    icon.addEventListener("click", toggleFavorite);
    li.appendChild(icon);

    ol.appendChild(li);
  }
}

function removeBook() {
  const ul = document.getElementById("book-list");
  const books = ul.getElementsByTagName("li");

  if (books.length === 0) {
    alert("There are no any books to remove.");
    return;
  }

  const lastBook = books[books.length - 1];
  const confirmation = confirm(
    `Are you sure you want to remove the last book? : "${lastBook.textContent}"`
  );

  if (confirmation) {
    ul.removeChild(lastBook);
  }
}

function searchBook() {
  const searchTerm = document
    .getElementById("search")
    .value.toLocaleLowerCase();
  const books = document.querySelectorAll("#book-list li");

  for (i = 0; i < books.length; i++) {
    const book = books[i];

    if (book.textContent.toLocaleLowerCase().includes(searchTerm)) {
      book.classList.add("highlight");
    } else {
      book.classList.remove("highlight");
    }
  }
}

function clearHighlights(){
    const books = document.querySelectorAll("#book-list li");

    books.forEach(book => {
        book.classList.remove("highlight");
    })

}