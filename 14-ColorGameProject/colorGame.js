var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.getElementById("message");    
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected"); 
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6; // ternary operator
        reset();
    });
}

function reset(){
        // generate new colors
        colors = generateRandomColors(numSquares);
        // pick a new random color from array
        pickedColor = pickColor();
        // Change colorDisplay to match picked color and change h1 bgcolor
        colorDisplay.textContent = pickedColor;
        resetButton.textContent = "NEW COLORS";
        messageDisplay.textContent = "";
        // Change colors of squares
        for(i = 0; i < squares.length; i++){
            if(colors[i]){
                squares[i].style.display = "block";
                squares[i].style.backgroundColor = colors[i];
            }else{
                squares[i].style.display = "none";
            }
        }
        h1.style.backgroundColor = "steelblue";  
}

resetButton.addEventListener("click", function(){
   reset();
}); 

colorDisplay.textContent = pickedColor;

for(i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // add click listeners to suqares
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor 
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "PLAY AGAIN?"
        } else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

function changeColors(color){
    // loop through all squares
    for (i = 0; i< squares.length; i++){
        // change each color to match given color    
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    // Random colors - Math.floor will chop off the remaining decimal point
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
    //make a array
    var arr = [];
    //repeat num times
    for(i =0; i<num; i++){
        //get random colors and push away
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    // pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g +", " + b +")" ;
}