const prompt = require('prompt-sync')();

let n = prompt("Enter the value of n: ");
n = Number.parseInt(n);

let i = 1;
let fact = 1;

do{
  fact *= i;
  i++;
}while(i<=n)

console.log("The factorial of " + n + " is: " + fact);