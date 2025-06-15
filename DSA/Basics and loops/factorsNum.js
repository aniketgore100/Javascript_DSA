function getFactors(num) {
    if(isNaN(num)) {
        return "Please enter a valid number";
    }
    if(num <= 0) {
        return "Please enter a positive number";
    }
    
    let fact = []; 
    for(let i = 1; i <= Math.floor(num/2); i++) {
        if (num % i === 0) {
            fact.push(i);
        }
    }
    fact.push(num);
    return fact;
}

// Test the function
const num = 36;
const factors = getFactors(num);
console.log(`Factors of ${num}:`, factors);