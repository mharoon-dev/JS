// home task

// 01
let cityName = prompt ("Which city do you belong to?");

if (cityName.toLowerCase() === "karachi") {
    document.getElementById("h1").innerHTML = "Welcome to the city of lights."
} 
if (cityName.toLowerCase() !== "karachi") {
    document.getElementById("h1").innerHTML = cityName  + " is a beautiful city.";
} 

// 02

let gender = prompt ("Write your gender here...");

if (gender.toLowerCase() === "male") {
    document.getElementById("h2").innerHTML = "Good Morning Sir."
} else if (gender.toLowerCase() === "female") {
    document.getElementById("h2").innerHTML = "Good Morning Ma'am."
} else {
    document.getElementById("h2").innerHTML = "sorry,you chose a wrong gender."
}

// 03

let trafficColor = prompt ("Write any color that occurs in a traffic light." );

if (trafficColor.toLowerCase() === "red") {
    document.getElementById("traffic-instruction").innerHTML = "A red light means stop."
} else if (trafficColor.toLowerCase() === "yellow") {
    document.getElementById("traffic-instruction").innerHTML = "A yellow light means you should get ready to drive."
} else if (trafficColor.toLowerCase() === "green") {
    document.getElementById("traffic-instruction").innerHTML = "Green lights mean Move now."
} else {
    document.getElementById("traffic-instruction").innerHTML = "Sorry, you chose the wrong color."
}

// 04

let fuel = prompt ("How much fuel is left?");

if (fuel.toLowerCase() < "0.25") {
    document.getElementById("fuel").innerHTML = "Please refill the fuel in your car."
} else {
    document.getElementById("fuel").innerHTML = "It is enough to go to the petrol pump."
}