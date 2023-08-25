// quiz

// question01

let ans1 = prompt ("write the full-form of HTML?");
let point = 0;

if (ans1.toLowerCase() === "hyper text markup language") {
    alert("correct! you got 1 point.");
    ++point;

} else {
    alert("sorry! you are wrong");
}

// question 02

let ans2 = prompt ("write the full-form of JS?");

if (ans2.toLowerCase() === "java script") {
    alert("correct! you got 1 point.");
    ++point
} else {
    alert("sorry!you are wrong");
}

// question 03

let ans3 = prompt ("write the full form of CSS");

if (ans3.toLowerCase() === "cascading style sheets") {
    alert("correct! you got 1 point.");
    ++point
} else {
    alert("sorry! you are wrong")
}

// question 04

let ans4 = prompt ("what is the full form of NAN in JS?");

if (ans4.toLowerCase() === "not a number ") {
    alert("correct! you got 1 point.");
    ++point
} else {
    alert("sorry! you are wrong")
}
var element = 
document.write("you got " + point + " points.");