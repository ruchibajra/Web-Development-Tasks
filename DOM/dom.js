/*Question 1: Dynamic Book Addition
Write a function addBook() that prompts the user for a book title and appends it as a new li
element to the ul with the ID book-list.*/
// Function to toggle the 'favorite' class on an <li> element
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
    const bookTitle = prompt("Enter Book Title");

    if (bookTitle) {
        const ul = document.getElementById("book-list");
        const li = document.createElement("li");

        // Add book title text
        li.textContent = bookTitle;

        // Add heart icon
        const icon = document.createElement("span");
        icon.classList.add("favorite-icon");
        icon.innerHTML = '<i class="ri-heart-line"></i>';
        icon.addEventListener("click", toggleFavorite);
        li.appendChild(icon);
        ul.appendChild(li);
    }
}

/*Question 2: Book Search Functionality
Implement a function searchBook() that highlights books in the list matching the search term
from the input field with the ID search-bar, setting their background color to yellow. */

function searchBook() {
  const searchTerm = document
    .getElementById("search-bar")
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

/*Question 3: Remove Selected Book
Create a function removeBook() that removes the last book from the list ul with the ID book-
list after a confirmation prompt. */

function removeBook() {
  const ul = document.getElementById("book-list");
  const books = ul.getElementsByTagName("li");

  if (books.length === 0) {
    alert("There are no books to remove.");
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

// Question 5: Clear Search Highlights
// Write a function clearSearchHighlights() that resets the background color of all li elements in
// the ul with the ID book-list to their default state.

function clearHighlights(){
    const books = document.querySelectorAll("#book-list li");

    books.forEach(book => {
        book.classList.remove("highlight");
    })

}

