// change h1 textcontent when click

var h = document.querySelector("h1");
h.addEventListener("click", newText);

function newText(){
    h.textContent = "My favorite Foods";
}


// change li font color when click them
var lis = document.getElementsByTagName("li");
for (var i = 0; i< lis.length; i++){
    lis[i].addEventListener("click", function(){
    this.style.color = "red";
    });
}

