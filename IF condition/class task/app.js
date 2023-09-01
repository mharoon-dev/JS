// function test(number) {
//     if (number === 5) {
//         return 10
//     } else if (number === 10) {
//         return 5
//     }
// }
// document.write(test(5));



var userFloor = 55;
var lift1 =  6;
var lift2 = 46;
var a = Math.abs(userFloor - lift1);
var b = Math.abs(userFloor - lift2);

function test(){
    if (a < b) {
        return "lift 1 aa rahi hai";
    } else {
        return "lift 2 aa rahi hai";
    }

} 



console.log(test())