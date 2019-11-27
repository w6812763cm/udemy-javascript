// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){ // this is span
        $(this).remove(); // this is li
    });
    event.stopPropagation(); // stop bubbling up
});

$("input[type='text']").on("keypress", function(event){
   if(event.which === 13){
       // grabbing new todo text from input
       var todoText = $(this).val();
       $(this).val("");
       // create a new li and add to ul
       $("ul").append("<li><span>X</span> " + todoText + "</li>");
   }
})