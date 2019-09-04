console.log("Print all numbers between -10 and 19");
var number1 = -10;
while(number1 < 20) {
    console.log(number1);
    number1 ++;
}

console.log("Print all even numbers between 10 and 40");
var number2 = 10;
while(number2 <= 40) {
    console.log(number2);
    number2 +=2;
}


console.log("Print all odd numbers between 300 and 333");
var number3 = 300;
while(number3 <= 333) {
    if(number3 % 2 == 1){
        console.log(number3);
    }
    number3++;
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
//5-50 可以同時被5和3整除的數字
var number4 = 5;
while(number4 <= 50){
    if(number4 % 5 == 0 && number4 % 3 == 0){
        console.log(number4);
    }
    number4++;
}
