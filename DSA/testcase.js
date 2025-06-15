let prompt = require('prompt-sync')();

let t = parseInt(prompt("Enter the number of test cases: "));
let results = [];
while(t--){
    let n = parseInt(prompt("Enter a number: "));
    results.push(n);

    for(let i = 0; i<results.length; i++){
        process.stdout.write(results[i] + " ");
    }
}
