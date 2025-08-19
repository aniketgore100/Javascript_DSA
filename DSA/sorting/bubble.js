// bubble sort

// start i = 0 to i = n-1;
// delclare flag = 0; to check if array is sorted or not.
// start j = 0; j < n-1-i; j++;
// swap 
// check if flag = 0; if true : break

const bubbleSort = (arr) =>{
for(let i = 0; i<arr.length-1; i++){
    console.log('swap done :', 'i = ', i, 'ele = ', arr[i]);
    let isSorted = false;
    for(let j = 0; j<arr.length-1-i; j++){
        console.log('j = ', j, 'ele = ', arr[j]);
        if(arr[j] > arr[j + 1]){
            console.log('swapping :', arr[j], 'and', arr[j + 1]);
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            isSorted = true;
        }
    }
    if(!isSorted) break;
}
}

let arr = [3,5,1,4,2,0];
bubbleSort(arr);
console.log('Sorted array: ', arr);