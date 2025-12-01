
/* Given a string s consisting of words and spaces, return the length of the last word 
in the string.

Example 1:
Input: s = "Hello World"
Output: 5 */

let s = "Hellow World"
//console.log(s.split(" "))

let arr = s.split(" ")
console.log("length of last word:", arr.at(arr.length-1).length)


/* Example 2:
Input: s = " fly me to the moon "
Output: 4 */

let t = " fly me to the moon "
let arr1 = t.trim().split(" ") 

console.log("Length of last word in the array:", arr1[arr1.length-1].length)


/* Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world')
Output: false
Explanation: An anagram is when you mix up the letters of a word to make a new one, 
using all the letters. */

console.log(isAnagram('listen', 'silent'))
console.log(isAnagram('hello', 'world'))

function isAnagram(fword, sword){

    let fwordArr = fword.trim().split('')
    let swordArr = sword.trim().split('')
    console.log(fwordArr.sort())
    console.log(swordArr.sort())

    for( let i=0; i<fwordArr.length; i++){
        if(fwordArr[i] !== swordArr[i])
            return false
        else
            return true
    }
}
