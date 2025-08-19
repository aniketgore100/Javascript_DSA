
const merge = (arr, low, mid, high) =>{
    let temp = [];
    let left = low;
    let right = mid + 1; 

    console.log("low = ", low);
    console.log("mid = ", mid);
    console.log("high = ", high);

    while(left <= mid && right<= high){
        if(arr[left] <= arr[right]){
            console.log("left < right : ", arr[left], "<", arr[right]);
            temp.push(arr[left]);
            left++;
        }
        else{
            console.log("left > right : ", arr[left], ">", arr[right]);
            temp.push(arr[right]);
            right++;
        }
    }

    while(left<=mid){
        temp.push(arr[left]);
        left++;
    }

    while (right<=high){
        temp.push(arr[right]);
        right++;
    }

    for(let i = low; i<=high; i++){
        arr[i] = temp[i - low];
    }
}

const mergeSort = (arr, low, high) => {
    console.log("start");
    if(low >= high ){
        return
    };
    let mid = Math.floor((low + high) / 2);
    console.log("mid = ", mid, "low = ", low, "high = ", high);
    mergeSort(arr, low, mid);
    console.log("mid + 1 = ", mid + 1, "high = ", high);
    mergeSort(arr, mid+1, high);
    merge(arr, low, mid, high);
} 

let arr = [5,4,3,2,1];
mergeSort(arr, 0, arr.length-1);
console.log(arr);
