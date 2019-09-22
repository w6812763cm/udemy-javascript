### Arrays

*如想要想要一個水果群組
```
var fruit1 = apple;
var fruit2 = orange;
var fruit3 = melon;
var fruit4 = grape;
```
這樣不是dry code，太多重複，而且他們是分離的
此時就可以用Arrays
* 第一個值index(索引)為0
* Array 跟 String 一樣 length為索引+1


```
var fruits = ["apple", "orange", "melon". "grape"];
```

* 可透過索引更改數值
* 亦可新增數值
```
var fruits = ["apple", "orange", "melon". "grape"];
fruits[0] = "lemon";
fruits[1] = "kiwi"; // 更改
fruits[4] = "banana"; // 新增
```
In addtion
```
//We can initialize an empty array two ways:
var friends = []; //no friends :(
var friends = new Array() //uncommon
```

* Arrays 可以儲存任何資料，將不同型態的東西放在一起
```
var random_collection = [49, true, "Hermione", null];
```