// Optimized factorial calculation with memoization
const factorialCache = new Map();

/**
 * Calculates factorial of a number using memoization
 * @param {number} num - The number to calculate factorial for
 * @returns {number|BigInt} - The factorial result
 */
function optimizedFactorial(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        throw new Error('Input must be a valid number');
    }
    if (num < 0) {
        throw new Error('Number must be non-negative');
    }
    if (num === 0 || num === 1) {
        return 1;
    }
    
    // Convert to BigInt for large numbers
    num = BigInt(num);
    
    if (factorialCache.has(num)) {
        return factorialCache.get(num);
    }

    let result = BigInt(1);
    for (let i = BigInt(2); i <= num; i++) {
        result *= i;
    }
    
    factorialCache.set(num, result);
    return result;
}

// Example usage
try {
    const num = 5;
    const result = optimizedFactorial(num);
    console.log(`Factorial of ${num} is ${result}`);
} catch (error) {
    console.error(error.message);
}