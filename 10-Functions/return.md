### Return
* Return就像是function中的Output一樣，藉由Return可以抓取function中的東西，可以讓這些東西使用在別的地方。
* 一個function 沒有用return就無法在別的地方使用，會是undefined
* 若同時下了多個return則始終只有一個return會執行

```
//function declaration
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
```

```
//function expression
var capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
```
##### function expression is variable and set that equal to a function