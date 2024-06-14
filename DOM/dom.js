/*Question 1: Dynamic Book Addition
Write a function addBook() that prompts the user for a book title and appends it as a new li
element to the ul with the ID book-list.*/

function addBook(){
    const bookTitle = prompt("Enter Book Title");

    if(bookTitle){
        const ul = document.getElementById("book-list");
        const li = document.createElement("li");

        li.textContent = bookTitle;
        ul.appendChild(li);
    }
}

/*Question 2: Book Search Functionality
Implement a function searchBook() that highlights books in the list matching the search term
from the input field with the ID search-bar, setting their background color to yellow. */

function searchBook(){
    const searchTerm = document.getElementById('search-bar').value.toLocaleLowerCase();
    const books = document.querySelectorAll('#book-list li');

    for(i=0; i<books.length; i++){
        const book = books[i];

        if(book.textContent.toLocaleLowerCase().includes(searchTerm)){
            book.classList.add('highlight');
        }else
        {
            book.classList.remove('highlight');
        }
    }

}