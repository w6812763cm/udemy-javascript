// write a isEven function which takes a single numberic argument and returns true if the number is even, and false otherwise.

// function isEven(n){
//     if (n % 2 === 0){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// can write another way

function isEven(n){
    return n % 2 === 0;
}



//factorial of the number 傳回參數的階層結果
function factorial(n){
    // define result variable
    var result = 1;
    // caculate factorial and store value in result
    for (var i=1; i<=n; i++){
        result *= i;
    }
    // return the result variable;
    return result;
}


//kebabToSnake(); 將“-”取代成"_","_"取代成“-"

function kebabToSnake(str){
    if (str.search(/[-]/g) !== -1){
        newStr = str.replace(/-/gi, "_");git
        return newStr;
    }
    else if (str.search(/[_]/g) !== -1){
        newStr = str.replace(/_/gi, "-");
        return newStr;
    }
    else {
        return newStr;
    }
}