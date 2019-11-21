// Select Text use text()
$("h1").text(); // "JQuery Methods Demo Page"
$("ul").text(); // "Skittles Starburst Twix"
$("li").text(); // "SkittlesStarburstTwix"

// Change Text
$("h1").text("Hello!");
$("li").text("Nice to meet you"); 

// Select inner HTML use html()
$("ul").html();

// Change HTML
$("li").html("<a href='http://www.google.com'>Google</a>");

// Change img size and attribute
$("img").css("width", "200px");
$("img").attr("src","https://images.unsplash.com/photo-1568274602483-355d7fbba69c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80");

// select first img
//$("img.first-of-type"); 
// select last img
$("img").last().attr("src", "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=716&q=80");

// If want to change input type
// $("input").attr("type", "color");


// .val() is getting input/dropdown menu/checkbox value and input can be change if have argument
// $("input").val()
// $("input").val("Hello!")
// $("select").val()

// addClass() , removeClass() and toogleClass() just like javascript classList