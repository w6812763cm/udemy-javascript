//Create secretNumber
var secretNumber = 20;
//Ask user for guessing
var guess = Number(prompt("Guess a number!"));

//Check if guess iwx right
if(guess === secretNumber) { //Number is convert string to number method
    alert("You got it right!");
}
//Check if higher
else if (guess > secretNumber){
    alert("Too high. Guess again!");
}
//Otherwise, check if lower
else {
    alert("Too low. Guess again!")
}