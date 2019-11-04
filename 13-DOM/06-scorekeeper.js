var p1btn = document.querySelector("#p1");
var p2btn = document.getElementById("p2");
var p1Score = 0;
var p2Score = 0;
var p1text = document.getElementById("p1Display");
var p2text = document.getElementById("p2Display");
var gameOver = false;
var score  = 5;
p1btn.addEventListener("click", function(){
    // if p1score is equal to score then gameOver
   if(!gameOver){
        p1Score++; 
        if(p1Score === score){
            gameOver = true;
        }
    p1text.textContent = p1Score;
   }
});

p2btn.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === score){
            gameOver = true;
        }
        p2text.textContent = p2Score;
    }
 });



 
 