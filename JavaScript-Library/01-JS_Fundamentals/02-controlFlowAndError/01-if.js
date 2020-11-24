/*
IF CONDITIONALS
*/

let isOn = true;

if (isOn == true){
    console.log('The light is on!');
}

if (isOn){
    console.log('The light is on, yay!');
}

let weather = 65;

if (weather < 70){
    console.log('Wear a jacket!');
}

let string = 'Tyler';

if (string === 'Tyler' || false){
    console.log('if statements and conditionals are powerful');
}

// program to check if the number is even or odd
// take input from the user
const number = prompt("Enter a number: 5");

// ternary operator
const result = (number % 2  == 0) ? "even" : "odd";

// display the result
console.log(`The number is ${result}.`);