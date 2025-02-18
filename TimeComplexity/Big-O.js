const arr = new Array(10).fill("aniket")
let flag = false;
let time = 0;
const find = (arr) =>{
    let t0 = performance.now();
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === 'aniket'){
           flag = true
           
        }
    }
    let t1 = performance.now();
    time = t1-t0;
    if(flag){
        return true;
    }else{
        return false;
    }
   
}

const result = find(arr);
console.log("result  is ::::" + result + " " + time) // 
