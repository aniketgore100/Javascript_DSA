
const containsDuplicates = (arr, k) => {
    let set = new Set();
    for(let i=0; i<arr.length; i++){
        if(set.has(arr[i])){
            return true;
        }else{
            set.add(arr[i]);
        }
        if(set.size > k){
            set.delete(arr[i - k]);
        }

    }
    return false;
}


let arr = [1,2,3,1];
let result = containsDuplicates(arr, 1);
console.log(result);