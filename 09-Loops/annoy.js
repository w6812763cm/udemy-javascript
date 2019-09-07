// var answer = prompt("Are we there yet?");

// while(answer !== "yes" && answer !== "yeah"){
//     var answer = prompt("Are we there yet?");

// }
// alert("YAY, We made it!");

//Version 2

var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1){   //indexOf傳回字母為字串的第幾個字 沒有則傳回-1
    var answer = prompt("Are we there yet?");
}

alert("YAY, We made it!");
