

function addBookToList() {
    let validationResults = validateFields();

    if (validationResults.result == false) {
        showErrorToast(validationResults.error);
    }
    else {
        let tytul_ksiazki = document.getElementById("nazwa_input").value;
        let autor_ksiazki = document.getElementById("autor_input").value;
        let grubosc_ksiazki = document.getElementById("grubosc_input").value;
        let rok_wydania = document.getElementById("rok_input").value;
        let kolor_ksiazki = document.getElementById("kolor_input").value;
        let opis_ksiazki = document.getElementById("opis_input").value;
        let wydawca_ksiazki = document.getElementById("wydawca_input").value;
        let tytul_oryginalu = document.getElementById("oryginal_input").value;
        let nazwisko_tlumacza = document.getElementById("tlumacz_input").value;

        let bookObj = {
            name: tytul_ksiazki,
            author: autor_ksiazki,
            year: rok_wydania,
            size: grubosc_ksiazki,
            color: kolor_ksiazki,
            description: opis_ksiazki,
            publisher: wydawca_ksiazki,
            original_title: tytul_oryginalu,
            translator_surname: nazwisko_tlumacza,

            pos_x: 200,
            pos_y: 150,
        }

        document.getElementById("nazwa_input").value = "";
        document.getElementById("autor_input").value = "";
        document.getElementById("grubosc_input").value = "";
        document.getElementById("rok_input").value = "";
        document.getElementById("kolor_input").value = "";
        document.getElementById("opis_input").value = "";
        document.getElementById("wydawca_input").value = "";
        document.getElementById("oryginal_input").value = "";
        document.getElementById("tlumacz_input").value = "";

        console.log(bookObj)

        config.books.push(bookObj);
        showSuccessToast();
        closeForm();
    }
}

function validateFields() {
    let nazwa_input = document.getElementById("nazwa_input");
    let grubosc_input = document.getElementById("grubosc_input");
    
    if (nazwa_input.value == "") {
        return {
            result: false,
            error: "Tytuł książki nie może być pusty!"
        };
    }
    if (grubosc_input.value == "") {
        return {
            result: false,
            error: "Grubość książki nie może być pusta!"
        };
    }

    return {
        result: true
    }
}

function showSuccessToast() {
    let toast = document.getElementById("toast-success");
    toast.style.top = "0";

    setTimeout(function () {
        hideSuccessToast();
    }, 4000);
}

function hideSuccessToast() {
    let toast = document.getElementById("toast-success");
    toast.style.top = "-120px";
}

function showErrorToast(error) {
    let toast = document.getElementById("toast-validation-error");
    toast.innerHTML = error;
    toast.style.top = "0";

    setTimeout(function () {
        hideErrorToast();
    }, 4000);
}

function hideErrorToast() {
    let toast = document.getElementById("toast-validation-error");
    toast.style.top = "-120px";
}