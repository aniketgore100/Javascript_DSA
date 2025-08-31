


// time complexity: O(n);
const largest = (arr) =>{
    let max = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}


let arr = [-1, -2, -3];
let result = largest(arr);
console.log(result);