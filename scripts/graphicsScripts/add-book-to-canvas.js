
function addBookToCanvas(bookObj) {

    let book = document.createElement("div");

    let generatedWidth = Math.floor(((Math.random() * 900) + 50));
    let generatedHeight = Math.floor(((Math.random() * 600) + 50));
    let sizeInPixels = bookObj.size * 10;

    book.style.backgroundColor = bookObj.color;
    book.style.width = sizeInPixels + "px";
    book.style.height = "100px";
    book.style.cursor = "pointer";
    book.style.left = generatedWidth + "px";
    book.style.top = generatedHeight + "px";
    book.setAttribute("data-grubosc", bookObj.size);
    book.setAttribute("data-color", bookObj.color);
    book.classList.add("book");

    let bookContainer = document.getElementsByClassName("book-container")[0];
    bookContainer.appendChild(book);
}
