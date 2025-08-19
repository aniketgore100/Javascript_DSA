//selection sort :

// start  i=0 to n-1;
// min index = i;
// start j = 0; j<n-1;
// check if arr[j] < arr[min];
// then swap 


const selectionSort = (arr) => {
    for(let i = 0; i<arr.length-1; i++){
        console.log('swap done :', 'i = ', i, 'ele = ', arr[i]);
        let min = i;
        console.log('current min :', 'i = ', i, 'min = ', min, 'ele = ', arr[min]);
        for(let j = i+1; j<arr.length; j++){
            console.log('j = ', j, 'ele = ', arr[j]);
            if(arr[j] < arr[min]){
               min = j;
               console.log('new min found :', 'j = ', j, 'min = ', min, 'ele = ', arr[min]);
            }
        }
        console.log('swapping :', arr[min], 'and', arr[i]);
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
}

let arr = [3,5,1,4,2,0];
selectionSort(arr);
console.log('Sorted array: ', arr);