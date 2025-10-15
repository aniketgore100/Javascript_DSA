

const bttboss = (arr) => {
    let n = arr.length;
    let min = arr[0];
    let profit = 0;
    for(let i = 0; i<n; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        profit = Math.max(profit, arr[i] - min);
    }
    return profit;
}


const result = bttboss([7,1,5,3,6,4]);
console.log(result);