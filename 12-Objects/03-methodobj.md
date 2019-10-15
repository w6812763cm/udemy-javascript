### Add Method to Objects
* 在物件裡面的函式(function)叫做Method,不稱做Property

```
var obj = {
    age: 20,
    isCool: true,
    pets: ["pinky","bob"],
    add: function(x,y) {
        return x + y;
    }
}
obj.add(10,20); //30
```