/* Create a JavaScript function that determines if a number 
is positive, negative, or zero and returns a corresponding string indicating the type. */


function numberType(inputNum){
    if(inputNum > 0)
        return "Positive"
    else if(inputNum < 0)
        return "Negative"   
    else if(inputNum == 0)
        return "Neutral"
}

console.log(numberType(0))