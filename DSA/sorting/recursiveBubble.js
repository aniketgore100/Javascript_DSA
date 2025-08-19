const recursiveBubble = (arr, n) => {

    if (n === 1) {
        return;
    }

    for (let i = 0; i < n - 1; i++) {        
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    recursiveBubble(arr, n - 1)
};

// Example run
let arr = [3, 5, 1, 4, 2, 0];
recursiveBubble(arr, arr.length);
console.log("Sorted array:", arr);
