/*
    CHALLENGE #1

        - Write a function that accepts two names as parameters, and then prints the full name to the console.
*/

// Solution:

function greeting(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}`);
}

greeting('Michael', 'Scott');

/*
    - CHALLENGE #2

        - Write a program that prints all numbers from 0-100
            - for multiples of 6, instead of the number, print 'Fizz'
            - for multiples of 8, instead of the number, print 'Buzz'
            - for multiples of 6 AND 8, instead of the number, print 'Fizz Buzz'
*/

// Solution:
for (let i = 0; i <= 100; i++) {
    if (i % 6 === 0 && i % 8 === 0) {
        console.log('Fizz Buzz');
    } else if (i % 6 === 0) {
        console.log('Fizz');
    } else if (i % 8 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

/*
    - CHALLENGE #3

        - Write a function called findPerimeter() that accepts 2 parameters called: length, width.
            - The function should return an interpolated string of 'True: the perimeter is ___' if the perimeter is over 20
            - the function should return an interpolated string of 'False: the perimeter is ___' if the perimeter is under 20

            HINT: P = x + x + y + y
                  P = 2x + 2y
                  P = 2(x + y)
*/

// Solution:
function findPerimeter(x, y) {
    let perimeter = (x * 2) + (y * 2);
    if (perimeter > 20) {
        return `True: the perimeter is ${perimeter}`;
    } else {
        return `False: the perimeter is ${perimeter}`;
    }
}

let P = findPerimeter(7, 6);
console.log(P);

/*
    - CHALLENGE #4

        - Create an object literal called library.
            - the library object will contain 3 properties: name, address, sections
                - name and address will both hold values that are strings. You can fabricate the information.
                - sections will be an object that will store a property called collections, which is an array of more objects. You should include at least 2 objects inside the collections array.
                    - the objects stored in the collections array will hold properties of classification, count, and aisle.
                        - both the classification and aisle properties should hold strings as values, and count should hold a value that is a number.

*/

// Solution:
let library = {
    name: 'Indianapolis Public Library',
    address: '123 Downtown St',
    sections: {
        collections: [{
            classification: 'Periodical',
            isle: 'A',
            count: 479
        }, {
            classification: 'Reference',
            isle: 'B',
            count: 1002
        }]
    }
}
