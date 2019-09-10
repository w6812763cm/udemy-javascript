### Arguments 參數
* Function可以藉由參數，來達成不一樣的結果
* 參數位於在Function中的()內

example : buy apples
```
function buyApple(num) {
  console.log(num * 30); // unit price is 30
}

buyApple(5); //150
buyApple(10); //300
```

many Arguments
```
function area(length, width){
    console.log("Area of triangle is " + (length * width) / 2 );
}

area(5,6) //15
```
* 如果輸入的參數少於function中參數的數量，那麼將會出現undefined的結果，在javascript裡並不會出現錯誤訊息。
