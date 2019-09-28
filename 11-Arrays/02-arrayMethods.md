### Array Methods
#### Build in Methods
* Push
將某一值加入陣列的最後
```
var colors = ["red", "blue", "green"];
colors.push("pink"); 
// ["red", "blue", "green", "pink"]
colors.push("orange", "yellow"); 
//["red", "blue", "green", "pink", "orange", "yellow"]
```

* Pop
將陣列的最後一個值移除
```
var colors = ["red", "blue", "green", "pink", "orange", "yellow"];
colors.pop();
// it return the last item of array "yellow"
//["red", "blue", "green", "pink", "orange"]
```



* Shift
將陣列最前面的值移除
```
colors.shift(); // it return "yellow"
// ["red", "green", "blue"]
```
* Unshift
從陣列最前面加入值
```
var colors=["red", "green", "blue"];
colors.unshift("yellow"); // it return the length of colors  -> 4
["yellow", "red", "green", "blue"]
```

* IndexOf
找尋某值在陣列中的索引
```
var colors = ["blue", "yellow", "green"];
colors.indexOf("yellow"); // return 1
colors.indexOf("red"); // not exist then return -1
```
* Slice
從陣列中提取某些部分的值
```
var nums = [4, 8, 17, 22, 33];

// 提取 17.22
var newNums = nums.slice(2,4); 
//2 is start index and  4 is end index but not inclusive 

// newNums is [17 ,22];
// nums is [4, 8, 17, 22, 33];

//亦可使用slice來copy整個陣列;
newNums = nums.slice();
newNums // [4, 8, 17, 22, 33]; 