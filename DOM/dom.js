function addBook(){
    const bookTitle = prompt("Enter Book Title");

    if(bookTitle){
        const ul = document.getElementById("book-list");
        const li = document.createElement("li");

        li.textContent = bookTitle;
        ul.appendChild(li);
    }
}