let prompt = require('prompt-sync')();

let input = parseInt(prompt("enter the num"));

for(let i = 1; i<=input; i++){
    for(let j = input-i; j>=0; j--){
        process.stdout.write(" ");
    }
    process.stdout.write("*");
}