var p1btn = document.querySelector("#p1");
var p2btn = document.getElementById("p2");
var resetbtn = document.getElementById("reset");
var numInput = document.querySelector("input")
var p1Score = 0;
var p2Score = 0;
var p1Text = document.getElementById("p1Display");
var p2Text = document.getElementById("p2Display");
var scoreText = document.querySelector("p span");
var gameOver = false;
var score  = 5;

p1btn.addEventListener("click", function(){
    // if p1score is equal to score then gameOver
   if(!gameOver){
        p1Score++; 
        if(p1Score === score){
            p1Text.classList.add("winner");
            gameOver = true;
        }
    p1Text.textContent = p1Score;
   }
});

p2btn.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === score){
            p2Text.classList.add("winner"); // winner color is green
            gameOver = true;
        }
        p2Text.textContent = p2Score;
    }
 });


resetbtn.addEventListener("click", function(){
   reset();
});

function reset(){
    // 歸零各數值和文字
    p1Score = 0;
    p2Score = 0;
    p1Text.textContent = 0;
    p2Text.textContent = 0;
    // 消除綠色文字
    p1Text.classList.remove("winner");
    p2Text.classList.remove("winner");
    //邏輯重設為false
    gameOver = false;
}
 
// 將輸入的文字變成WinnerScore
numInput.addEventListener("change", function(){
    scoreText.textContent = (this.value);
    score = Number(this.value);//輸入的值為String需轉為Number
    reset(); // 更改數字後會reset遊戲
});