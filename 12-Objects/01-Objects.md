### Objects
* use {}
* Store data in key-value
##### Important : unlike arrays, objects have no order
```
var person = {
    name: "Cindy",
    age: 32,
    city: "Missoula"

}
```
#### If we want to retrieve the data we can use 2 ways
```
// first
console.log(person["name"]);

// second
console.log(person.name);
```
##### 有三種情況需要用第一種情形
* 屬性以數字開頭 -> someObject["12years"]
* 屬性是變數時 -> var str = "name"
    欲取得name -> someObject[str] 
* 屬性含有空格時 -> someObject["fav color"]

#### Updating Object
```
var bottle = {
    color: "blue",
    ml: 700
};

bottle.color = "green"; // color:green, ml: 700
bottle[“ml”] = 600; // color:green, ml: 600
```

#### Create Objects


```
var person = {};
person.name = "Amy";
person.age = 20;
person.city = "LA";
```
```
var person = {
    name = "Amy",
    age = 20,
    city = "LA"
};
```
```
var person = new Object();
person.name = "Amy";
person.age = 20;
person.city = "LA";
```