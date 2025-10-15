



const containsDuplicates = (arr) => {
    let set = new Set();
    for(let i=0; i<arr.length; i++){
        if(set.has(arr[i])){
            return true;
        }
        else{
            set.add(arr[i]);
        }
    }
    return false;
}

let arr = [1,2,3,1];
let result = containsDuplicates(arr);
console.log(result);