

window.setTimeout(function() {

var str = prompt("Enter new array by comma, e.g. 1,2,3,4")
//使用split方法將輸入值變成array
var arr = str.split(",");
console.log(arr);
printReverse(arr);

function printReverse(newArray){
   for(var i = newArray.length -1; i >=0 ; i--){
      console.log(newArray[i]);
   }   
}

}, 500);


function isUniform(newArr){
   var compare1 = newArr[0];
   for (var i = 1 ; i < newArr.length ; i++){
       //  compare first element and second , if true go ahead , false then return false
       if (newArr[i] !== compare1){
         return false; //等同於結束;
       } 
   }
   return true;
}

isUniform([1,1,1,1]); // true
isUniform([1,2,1,1]); // false


//sum of all the element in the array
function sumArray(array){
   var total = 0;
   for (var i = 0 ; i < array.length ; i++){
      total += array[i]; 
   }
   return total;
}

//and can use forEach
function sumArray(array){
   var total = 0;
   array.forEach(function(element){
      total += element;
   });
   return total;

}

sumArray([1,2,3,4]); //10
sumArray([-5,100]) //95



// return maximum in the array
function max(array){
   var maxNum = array[0];
   for(var i = 1; i < array.length; i++){
      if (array[i] > maxNum){
         maxNum = array[i];
      }
   }
   return maxNum;
}

max([2,3,4,5]);