const prompt = require('prompt-sync')();

let n = prompt("Enter the value of n: ");
n = Number.parseInt(n);

let sum = 0;

for(let i=0; i<=n; i++){
    sum += i;
}

console.log("Sum of " + n + " natural number is " + sum);