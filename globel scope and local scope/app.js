// var variable is globle and function scope
// let and const is local / block scope 
// every variable decleard globaly so it will be call every where.
// but i call any variable (var,let,const) decleared in the function and call
// out of the fuction so it will give me a ReferenceError (not defined)
// 

var userName = "haroon"

function varCheck() {
console.log("username = " + userName) // userName = undefined 
var userName = "ali" 
}
varCheck() 

console.log(userName) // username = haroon 


function letCheck() {
    let userName2 = "ali"  
    console.log(userName)  //  username = haroon 
    console.log(userName2)  //  username2 = ali
}
letCheck()

