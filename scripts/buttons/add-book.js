

window.onload = function() {
    var button = document.getElementById("addBook");
    var addBookButtonClicked = false;

    button.onclick = function () {
        console.log("clicked")
        if (addBookButtonClicked == false) {
            addBookButtonClicked = true;

            document.getElementById("modal-add-book-curtain").style.display = "initial";
            document.getElementById("modal-add-book").style.display = "initial";
            
        }
    }
}