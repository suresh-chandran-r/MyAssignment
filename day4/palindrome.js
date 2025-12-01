
/* Write a function to reverse the string.
1. Convert the input into characters
2. Loop them in reverse direction
3. Concatenate the string
4. Print the new string

Write a function to check the given string is a palindrome
[If the given string and reverse string are the same, it is a palindrome]
1. Check if the reverse string and original string are the same
2. Return true if same, else the false. */

let strOriginal = "malayalam"
let strReversed = ""

strReversed = reverse(strOriginal)
console.log(palindrome(strOriginal, strReversed))



function reverse(strA){
    let strB = ""

    for(i=strA.length-1 ; i>=0; i--){
        strB = strB.concat(strA.charAt(i).toString())
    }

    console.log(strB)
    return strB
}

 function palindrome(strOrig, strRev){
    if(strOrig === strRev)
        return true
    else
        return false

}




