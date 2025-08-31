

const secondLargest = (arr) =>{
    let max = arr[0];
    let secondMax = arr[0];
    for(let i = 0; i<arr.length; i++){
          console.log("secondMax outside the if : ", secondMax);
        if(arr[i] > max){            
            secondMax = max;
            max = arr[i];
           console.log("max outside the if : ", max);
        }
    }
    return secondMax;
}


let arr = [3,5,1,4,2,0];
let result = secondLargest(arr);
console.log(result);