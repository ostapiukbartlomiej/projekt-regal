
function closeForm() {
    if (config.closewindow == false) {
        config.closewindow = true;
        document.getElementById("modal-add-book-curtain").style.display = "none";
        document.getElementById("modal-add-book").style.display = "none";
    }
}


