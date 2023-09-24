// let bakery = ["makhan","paapay","Doodh","plain cake","chips"];

// const itemNumber = +prompt("tell me the number");

// alert("this is your product " + bakery[itemNumber] );






//                 //00     //01    //02    //03      //04
// let fruits = ["apple","mango","banana","orange","strawberry",]

// //   and me koi element ka izafa karne ke liye

//                            //05
// fruits[fruits.length] = "null" 
// console.log(fruits);

//                                //08
// fruits[fruits.length + 2] = "anannas" 
// console.log(fruits);

//                             //04
// fruits[fruits.length - 5] = "aam" 
// console.log(fruits);

// document.write(fruits[4]);





// programar ki counting 0  se start ho ti hai







// // new array

// let students = ["haroon","kamil","samad","sami","jamal"];


// // add in the end
// students.push("ali");

// // remove in the end
// students.pop(); // (ali)

// // remove in the start
// students.shift() // haroon

// // add in the start
// students.unshift("haroon") // haroon

// // students.splice()
//             //  add from  remove   kia add karna hai
// students.splice(  1,        4,      "ali","ahmad","muhammad");

// menu array  0          1       2       3         4
// let menu = ["samoosa","biryani","bbq","korma","cold drink"]
//                      // index     length
// let dinner = menu.slice(  1,        4   )

// let lunch = menu.splice(1,2)



// foreach


let food = [
    {name:"biryani", weight:"30kg"},
    {name:"korma", weight:"10kg"},
    {name:"white karahi" ,weight:"10kg" }
]

food.forEach(function(value) {
    console.log(value.name)
})


// map

let students = [
    { id:1, name: "haroon"  , score: 40   , fav_sub: "maths" },
    { id:2, name:  "sami"   , score: 50   , fav_sub:  "english"},
    { id:3, name:  "jamal"  , score: 60   , fav_sub:  "urdu"},
    { id:4, name:  "kamil"  , score: 70   , fav_sub:  "islamiat"},
    { id:5, name:  "samad"  , score: 80   , fav_sub:  "arabic"}
]

const students2 = students.map(function(value) {
    return {...value , role: "student"}
})

console.log (students2)



