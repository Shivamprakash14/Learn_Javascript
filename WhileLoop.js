const prompt = require('prompt-sync')();

let n = prompt("Enter the value of n: ");
n = Number.parseInt(n);

let i = 1;
let fact = 1;

while(i<=n){
  fact *= i;
  i++;
}

console.log("The factorial of " + n + " is: " + fact);