let prompt = require('prompt-sync')();

let a = parseInt(prompt("Enter the number  "));

for(let i = 1; i<=a; i++){
    for(let j = 1; j<=i; j++){
        process.stdout.write(j.toString());
    };
    process.stdout.write("\n");
}

