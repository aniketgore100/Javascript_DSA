
//brute force approach

// const arrProduct = (arr) => {
//    let product = 1;
//    let res = [];
//    for(let i= 0; i<arr.length; i++){
//     for(let j=0; j<arr.length; j++){
//         if(i!=j){
//             product = product * arr[j];
//         }
//    }
//    res[i] = product;
//    product = 1;
// }
//   return res;
// }


//optmized approach : 


const arrProduct = (arr) => {
    let ans = [arr.length, 1];
    let prefix = 1; 
    let postfix = 1;

    for(let i = 0; i<arr.length; i++){
        ans[i] = prefix;
        prefix = prefix * arr[i];
    }

    for(let i = arr.length - 1; i>=0; i--){
        ans[i] = ans[i] * postfix;
        postfix = postfix * arr[i];
    }

    return ans;
}


let arr = [1, -1];
let result = arrProduct(arr);
console.log(result)