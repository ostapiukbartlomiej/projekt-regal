
function addBookUIButton() {
    if (config.closewindow == true) {
        config.closewindow = false;
        document.getElementById("modal-add-book-curtain").style.display = "initial";
        document.getElementById("modal-add-book").style.display = "initial";
    }
}