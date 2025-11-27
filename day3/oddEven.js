
/* Write a JavaScript function named `isOddOrEven` that takes an integer as input 
and returns `Odd` if the number is odd and `"Even"` if the number is even. */

console.log("Input is: ",isOddEven(9))

function isOddEven(intValue){
    if((intValue%2) === 0){
        return("Even")
    }
    else if((intValue%2) === 1){
        return("Odd")
    }
    
}

