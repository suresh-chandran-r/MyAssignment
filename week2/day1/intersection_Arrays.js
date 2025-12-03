


arr1 = [2,3,4,5,6]
arr2 = [7,8,9,10,2]
concatArrays(arr1, arr2)

arr1 = [2,3,4,5,6]
arr2 = [2,3,4,5,6]
concatArrays(arr1, arr2)

arr1 = [2,3,4,5,6]
arr2 = [20,30,40,50,60]
concatArrays(arr1, arr2)

arr1 = [2,2,4,5,2]
arr2 = [2,30,40,50,60]
concatArrays(arr1, arr2)

arr1.sort()


function concatArrays(){
    let arr3 = []
    for(i=0; i<arr1.length; i++){

        if(i<arr1.length-2){
        while(arr1[i] !== arr1[i+1]){
            //console.log("Inside While",arr1[i])
            for(j=0; j<arr2.length; j++){
                if(arr1[i] === arr2[j]){
                    arr3.push(arr1[i])
                    break;
                }
            }            
            break
        }

        }      
    }console.log(arr3)
}