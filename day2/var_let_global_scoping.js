/*## *Assignment Details:*
Write a JavaScript program to observe how the same variable name behaves:
* in *global scope*,
* inside a *function*, and
* inside an *if-block* using both var and let.*/

var genderType = "female" //declared globally

function printGender()
{
    let color = "brown" //function scoped
    if(genderType.startsWith("female"))
    {
        var age = "30" //Accessile outside the if block. Scoping is not applicable.
        let color = "pink" //block-scoped
        console.log("color inside block is:", color)
    }
    console.log("Value of age is:", age)
    console.log("color outside block is:", color)
}

printGender()
console.log("Value of GenderType globally is",genderType)

