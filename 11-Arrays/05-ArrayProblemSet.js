

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


function isUniform(newArr){
   for (var i = 1 ; i < newArr.length ; i++){
       //  compare first element and second , if true go ahead , false then return false
       var compare1 = newArr[0];
       var compare2 = newArr[i];
       if (compare1 !== compare2){
          console.log("false");
          break;
       } else if (i === newArr.length -1) {
          console.log("true");
       }
   }
}

isUniform([1,1,1,1]); // true
isUniform([1,2,1,1]); // false