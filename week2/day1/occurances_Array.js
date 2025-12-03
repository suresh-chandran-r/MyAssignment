

/* Find the number of occurrences.
Given the array, const nums = [2,4,5,2,1,2];
if const k = 2, then output >> 3 */

/* Assignment Requirements:
1. Initialize count to 0.
2. Loop through the array `nums`.
3. If the element equals `k`, increment count.
4. Return the count of `k` in `nums`. */

const nums = [2,4,5,2,1,2]
function count_Occurances_Array(j){

    let c = 0
    for(i=0; i<nums.length; i++){
        if(j === nums[i])
            c++
    }
    return c
}

console.log(count_Occurances_Array(2)) 
console.log(count_Occurances_Array(5))