// click event by JQuery
$("h1").click(function(){
    console.log("you click " + $(this).text());
});

// .on()
$("h1").on("click", function(){
	$(this).css("color", "green");
});


// .click()
$("button").click(function(){
    $(this).css({
        background: "blue",
        color: "White"
    });
    var text = $(this).text();
    console.log("You click" + text);
});

// .on() mouseenter and mouseleave
$("button").on("mouseenter", function(){
    $(this).css("font-Weight", "bold");
});

$("button").on("mouseleave", function(){
    $(this).css("font-Weight", "normal");
});

// .keypress() We key any string and hit the ENTER then clear the text.
$("input").keypress(function(event){
	if(event.which === 13){
        console.log("You hit the ENTER");
        $("input").val("");
    }
});

