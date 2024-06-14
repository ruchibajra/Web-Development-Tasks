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