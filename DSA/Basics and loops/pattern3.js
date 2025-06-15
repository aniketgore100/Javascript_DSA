let prompt = require('prompt-sync')();

let input = parseInt(prompt("Enter the number  "));

for(let i = 1; i<=input; i++){
    let ch = 65;
    for(let j = 1; j<=i; j++){
        process.stdout.write(String.fromCharCode(ch)+" ");
        ch++;
    }
    process.stdout.write("\n");
}