##### Array Iteration

* For loop
```
var colors = ["red", "blue", "green"];
for ( var i = 0 ; i < colors.length; i++ ){
    console.log(colors[i]);
}
```

* ForEach
    * forEach takes a callback function
    * 使用ForEach可以替代上述的forloop，針對每一個item處理，依然可以印出每一個item
    * ForEach會包含一個匿名function，無法在其他地方使用

var colors = ["red", "blue", "green"];
colors.forEach(function(color){
    console.log(color);
})