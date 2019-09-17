### Higher Order Function (高階函數)
  * 將其他function拿來做參數(argument)使用或者是回傳(return)結果是Function稱之高階函數

  * 下列例子將sing這個function當成參數
 ```
 function (sing){
     console.log("hello it's me.");
     console.log("Hello from the out side...")
 }
 
 // setInterval(anotherFunc, Interval) 固定間隔重複

setInterval(sing, 1000) //return 2
clearInterval(2) //使用return的值來停止
```
