const arr = [1,2,3,4,5];
let count = 0;
const findPairs  = (arr) =>{
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr.length; j++) {
            console.log("sum ::",arr[i]+arr[j])
            console.log(arr[i], " ", arr[j]);
            count++;
        }
    }
}

findPairs(arr);
console.log("total Pairs" , count);