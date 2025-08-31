const findPivot = (arr, low, high) =>{
    let pivot = arr[low];
    let i = low;
    let j = high;
    if( i < j) {
        console.log("pivot : ", pivot);
        while(i < j){
            console.log("i : ", i, "j :", j);
            while(arr[i] <= pivot && i<=high-1){
                console.log("right true i",i, arr[i]);
                i++;
                console.log("i : ", i, "j :", j);
            }
            while(arr[j] > pivot && j>=low+1){
                console.log("left true j",j, arr[j]);
                j--;
                console.log("i : ", i, "j :", j);
            }
            if(i < j){
                [arr[i], arr[j]] = [arr[j], arr[i]];
                console.log("swap : ", arr);

            }
            console.log("iteration done")
        }
        [arr[low], arr[j]] = [arr[j], arr[low]];
        // console.log("arr : ", arr);
        return j;
    }
}

const quickSort = (arr, low, high) => {
    if(low < high){
        let pI = findPivot(arr, low, high);
        console.log("pI : ", pI);
        quickSort(arr, low, pI-1);
        quickSort(arr, pI+1, high);
    }
}

let arr = [3,4,5,1,2,0];
quickSort(arr, 0, arr.length-1);
console.log("final array : ", arr);