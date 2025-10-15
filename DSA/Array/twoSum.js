

const twoSum = (nums, target) =>{
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        const diff = target - nums[i];
        if(map.has(diff)){
            console.log(`Pair found: ${map.get(diff)}, ${i}`);
        }
        console.log("nums[i]: ", i, nums[i]);
        map.set(i, nums[i]);
    }
}


let sum = [2,7,11,15];
let target = 9;
let result = twoSum(sum, target);
console.log(result);