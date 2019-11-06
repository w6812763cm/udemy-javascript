var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
    // hover 
    lis[i].addEventListener("mouseover", function(){
       this.classList.add("selected");
    });

    // leave
    lis[i].addEventListener("mouseout", function(){
        this.classList.remove("selected");
    });    
    
    //click
    lis[i].addEventListener("click", function(){
        this.classList.toggle("done"); // add done class when we click the li
    });


}
