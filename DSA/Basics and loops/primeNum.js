const PrimeRange = (start, end) => {
    const primes = [];
    
    // Helper function to check if a number is prime
    const isPrime = (num) => {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    };

    // Find all primes in the range
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    
    return primes;
};

// Test the function
const start = 1;
const end = 50;
const primeNumbers = PrimeRange(start, end);
console.log(`Prime numbers between ${start} and ${end}:`, primeNumbers);