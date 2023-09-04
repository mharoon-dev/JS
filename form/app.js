// calling all input fields
let fName = document.getElementById("fname")
let lname = document.getElementById("last name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let conformPassword = document.getElementById("conform password")

const userName = "haroon.aghani@gmail.com" 

function signupButton() {
    if (fName.value == "" ||
        lname.value == "" ||
        email.value == "" ||
        password.value == "" ||
        conformPassword.value == "") {
        alert("fill all the fields")
        } else if (
            password != conformPassword
        ) {
            alert("password and conform-password are not matching.")
        } else if (
            email == userName
        ) {
            alert("your account is already exist.\nplease,go to the login page.")
        } else {
            alert("User signup successfully\nWelcome to our website.")
        }
}