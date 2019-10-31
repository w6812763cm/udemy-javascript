//2 ways to get button, getElementsByTagName return array,querySelector return one.

var btn = document.getElementsByTagName("button")[0];
var isPurple = false;

btn.addEventListener("click", colorChange);

// function colorChange(){
//     // if white
//     if (isPurple) {
//         // make it purple
//         document.body.style.background = "white";
 
//     }
//     // else
//     else {
//         // make it white
//         document.body.style.background= "purple";
//     }  
//     isPurple = !isPurple;  
// }

// use ClassList toggle
function colorChange(){
    document.body.classList.toggle("purple");
};