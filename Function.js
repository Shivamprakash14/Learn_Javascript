const prompt = require('prompt-sync')();

function avg(x,y,z){

    return (x+y+z)/3;
}

let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");
let c = prompt("Enter third number: ");

a = Number.parseInt(a);
b = Number.parseInt(b);
c = Number.parseInt(c);

console.log("Average of " + a + "," + b + " and " + c + " is", parseFloat(avg(a,b,c)).toFixed(2));
