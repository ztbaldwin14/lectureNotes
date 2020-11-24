/*
Functions:
-Javascript functions are fedined with the function keyword, and can be written with the function declaration or a function expression

-Function declarations are hoisted in our code, and run ONLY when we call them(invoke them)
. So any function in our code sits and waits to be ran until we call it by name. Think of it as a student with his or her hand up, waiting to ask a question. That student does not ask the question until the teached calls upon them.

-Function expressions are not hoisted , and are generally stored in variables

-Functions without names are known as anonymous functions
*/

//Function Declaration

// function sayHello() {
//     console.log("Hi");
// }

// sayHello();

// //Funtion Expression

// let greetings = function () {
//     console.log("Hello")
// }

// greetings();

/*Parameters

-Think of parameters as a newly declared variable that we have not given a value to yet
    -The value that we pass into our function when we call the function to run(which is known as an argument), is the value that gets assigned to the parameter

    -General naming convention for function parameters: the parameter should be named something related to the information we're passing into the function. If we're passing in an interger, we may name our parameter num or number
*/

// function myDog(husky) {
//     console.log(`My dog's name is ${husky}`);
// }

// myDog("Princess"); //"Princess" is the argument
// myDog("Luna");

// function allMyDogs(smallHusky, bigHusky, borderCollie) {
//     console.log(`My dogs are named ${smallHusky}, ${bigHusky}, and ${borderCollie}.`);
// }

// allMyDogs("Mira", "Luna", "Charlie");

// /*
// Return

// -functions can also manipulate the data sent to them, and return a new value
// */

function calculator(one, two, three) {
    let totalWeight = one + two + three;
    let average = Math.round(totalWeight / 3)
    return average;
}

let averageWeight = calculator(15, 60, 55);
console.log(averageWeight);

/*
Arrow Functions

-Arrow functions (or fat arrow function) were introduced in ES6. They are basically kust a more concise way to write functions expressions - NOT declarations

    -This means that arrow functions do NOT get hoisted

-There are two types of arrow functions: concise body and block body
    -The return happens automatically with a concise body arrow function
    -The return does not happen automatically with a block body arrow function
*/

//Concise body
// let speak = (name) => console.log(`${name} goes wooooof!`);
// speak("Luna");

// let nameJoiner = (first, last) => `${first} ${last}`;
// let fullName = nameJoiner("Donvan", "Triplett");
// console.log(fullName);

//Block Body
let speak = (name) => {
    console.log(`${name} goes woooof`)
}

let nameJoiner = (first, last) => {
    return `${first} ${last}`;
}

let fullName = nameJoiner("Donovan", "Triplett");
console.log(fullName);

// PRACTICE I
// Write a function that takes two parameters  (Length and Width) that returns
// the area of the rectangle.
// Create a variable named area1 and area2 that will call the Function and store its return
// console log the variables
// Example :  4 by 8 rectangle will give  32;

function rectangleArea(length, width) {
    let area = length * width;
    return area;
}
let area1 = rectangleArea(4, 8);
let area2 = rectangleArea(1280, 720);
console.log(area1);
console.log(area2);

// Practice II

// Write a function that will convert dog years to human years
// Formula for conversion  - Human Age = (Dog Age -2) x 4 + 21

function convertDogAge(dogsHumanAge){
    let humanAge = ((dogsHumanAge-2) * 4 + 21);
    return humanAge;
}

let dogAge = convertDogAge(4);
console.log(dogAge);
//OR
// console.log(convertDogAge(4));

console.log(hello);
var hello = "hello";

var hello = "hello";
console.log(hello);

function goodBye(){
    console.log("goodbye");
}

/*
************
  SCOPE
************

    - scope is the hierarchy of variscoables in our code - also commonly referred to as global scope and local scope, or parent scope and child scope. 
        - local scopes have access to global scopes, but not vice versa.

        overall JS document ---> [

                                    let coffeeType = 'dark roast'; <--- parent scope, or global scope. Can be accessed in local scopes
                                    
                                    function exampleFunction() {
                                        let x = 'declared inside function'; <--- x can only be used in exampleFunction. x's scope is local 
                                                                                 to exampleFunction 
                                    }

                                    console.log(x); // error, cannot access x outside of it's scope

                                ]
    

    MDN Docs: https://developer.mozilla.org/en-US/docs/Glossary/Scope
*/

/*
************
 HOISTING
************

    - hoisting was thought up as a general way of thinking about how our code is compiled and executed.
        - there are two general phases that happen when we run our code:
            - creation phase: any variable (var, let, const) and functions in our code are stored to memory.
            - execution phase: values are assigned to the variables and functions that were stored to memory during the create phase

            (what's on the left side of the = is what's stored to memory during the creation phase) ---> let hoisted = true <--- (the value, or the right side of the =, is what gets assigned during the execution phase - before finally then running our code.)
    
    - Conceptually, pretend that all variable and function declarations are physically moved to the top of your code, and stored away in memory.

    - when our code is read, the file is read top to bottom, line by line, in sequential order. 

    MDN Docs: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
*/