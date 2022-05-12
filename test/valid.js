function validateForm() {
    let email = document.forms["form01"]["email"].value;
    let password = document.forms["form01"]["password"].value;

    if (email === "" && password === "") {
        document.getElementsByClassName("valid-hide")[0].style.display = "block";
        document.getElementsByClassName("valid-hide")[1].style.display = "block";

        return false;
    }
}

function checkInput() {
    let email = document.forms["form01"]["email"].value;

    if (email !== "") {
        document.getElementsByClassName("valid-hide")[0].style.display = "none";
    }
}