

window.setTimeout(function() {

var str = prompt("Enter new array by comma, e.g. 1,2,3,4")
//使用split方法將輸入值變成array
var arr = str.split(",");
console.log(arr);
printReverse(arr);

function printReverse(newArray){
   for(var i = newArray.length; i >=0 ; i--){
      console.log(newArray[i]);
   }   
}
// // print every element in reverse
// for(var i = arr.length; i >=0 ; i--){
//    console.log( arr[i]);
// }

}, 500);