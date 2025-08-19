



const insertionSort = (arr) =>{
    for(let i=0; i<=arr.length-1; i++){
        let j = i; 
        console.log("i : ", i)

        while(j > 0 && arr[j-1] > arr[j]){
            console.log("j : ", j)
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            j--;
        }
    }
}


let arr = [3,5,1,4,2,0];
console.log('unsorted array : ', arr);
insertionSort(arr);
console.log('Sorted array: ', arr);