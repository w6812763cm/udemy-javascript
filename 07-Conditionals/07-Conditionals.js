var age = prompt("What is your age?");

//IF age is negative
if(age < 0){
	console.log("error! please input the correct age");
}

//IF age is 21
if(age == 21){
    console.log("happy 21st birthday!!");
}

//IF age is odd
if(age % 2 == 1){
    console.log("your age is odd!");
}

// IF age is Perfect Square
if (age % Math.sqrt(age) === 0){
    console.log("Perfect Square");
}