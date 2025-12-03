

/* Assignment Requirements:
Task 1: Function Declaration
Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello,
<name>!" to the console. */

    function userProfile1(name){
        let output = `Template Literals: Hello, ${name}!`
        console.log(output)
    }
    userProfile1("testleaf") 


/* Task 2: Arrow Function
Create an arrow function named `double` that takes a number as a parameter and returns
double its value. */

/* Traditional function expression
const add = function(a, b) {
    return a + b;
} */

      //Arrow function
        const multiplyArrow = (a) => 2*a;
        console.log("Arrow function:", multiplyArrow(4))


/* Task 3: Anonymous Function
Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"`
after 2 seconds. */

    setTimeout(() => {
         console.log("Anonymous Function: This message is delayed by 2 seconds")
    }, 2000);


/* Task 4: Callback Function
Create a function named `getUserData` that takes a callback function as a parameter. Inside
`getUserData`, simulate fetching data with `setTimeout` and then call the callback function with
that should print “Call Back Function” after 3 seconds.
Call the `getUserData` function and log message using the callback function. */

getUserData(getPrintData)

function getUserData(fCallBack){
        console.log("Start")

    setTimeout(function(fCallBack){
        console.log("This message is delayed by 3 seconds")
    }, 3000, fCallBack())
    
}

function getPrintData(){
    console.log("Call Back Function")
}
