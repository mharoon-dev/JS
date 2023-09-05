let fName = document.getElementById("fname")
let lName = document.getElementById("lname")
let email = document.getElementById("email")
let password = document.getElementById("password")
let conformPassword = document.getElementById("conform password")

// IDS
const user1 = "haroon.aghani@gmail.com" 
const user1P = "uideveloper"

const user2 = "agar3d@gmail.com" 
const user2P = "designer"

const user3 = "kamil123@gmail.com" 
const user3P = "frontenddeveloper"

const user4 = "samad123@gmail.com" 
const user4P = "jsdeveloper"

function signupButton() {

    // checking fname values
    if (fName.value == "") {
        alert("Your first name is missing.")
        }

    // checking lname values
        if (lName.value == "") {
            alert("Your last name is missing.")
    } 

    // checking email values
    if (email.value == "") {
        alert("Your email is missing.")
    }

    // checking password values
    if (password.value == "") {
        alert("Your password is missing.")
    }

    // checking conform password values
    if (conformPassword.value == "") {
    alert("Your conform-Password is missing.")
    }

    // checking password and conform password is equal or not
    if (password.value != conformPassword.value) {
        alert("password and conform-password are not matching.")
    }

    // checking is account already exist?
    if (email.value == user1) {
        alert("Account is already exist from this email address.")
    } else if (email.value == user2) {
        alert("Account is already exist from this email address.")
    } else if (email.value == user3) {
        alert("Account is already exist from this email address.")
    } else if (email.value == user4) {
        alert("Account is already exist from this email address.")
    } else {
        alert("user sign-up successfully")
    } 
    return window.location.href = './home.html'
} 



