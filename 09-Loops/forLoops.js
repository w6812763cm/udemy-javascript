console.log("Print all numbers between -10 and 19");

for(var i= -10; i < 20; i++){
    console.log(i);
}


console.log("Print all even numbers between 10 and 40");
for(var i = 10; i<=40; i+=2){
    console.log(i);
}


console.log("Print all odd numbers between 300 and 333");
for(var i = 300; i <= 333; i+=1){
    if(i % 2 !== 0){
        console.log(i);
    }
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

for (i = 5; i <= 50; i++){
    if (i % 5 === 0 && i % 3 ===0){
        console.log(i);
    }
}


