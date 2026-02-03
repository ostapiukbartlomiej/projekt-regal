

window.onload = function() {
    var button = document.getElementById("addBook");
    var addBookButtonClicked = false;
    var exit = document.getElementById("exit");
    var closewindow = false;

    button.onclick = function () {
        console.log("clicked")
        if (addBookButtonClicked == false) {
            addBookButtonClicked = true;
            closewindow = false;
            document.getElementById("modal-add-book-curtain").style.display = "initial";
            document.getElementById("modal-add-book").style.display = "initial";
            
        }
    }
    exit.onclick = function () {
        console.log("clicked")
        if (closewindow == false) {
            closewindow= true;
            addBookButtonClicked = false;
            document.getElementById("modal-add-book-curtain").style.display = "none";
            document.getElementById("modal-add-book").style.display = "none";
            
        }
    }
}