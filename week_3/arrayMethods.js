/*
Arrays
    -Arrays are used to store multiple values in a single variable
        -there are array methods that allow us to traverse, as well as mutate, the data being held by an array
    
    -Arrays are 0 indexed, meaning the first item in an array will have an index of 0, and the last item will have an index of the arrays length -1

*/

// let arr = ["This is the first element", "This is the second element", "This is the third element"];

// console.log(arr[1]);

//console.log(arr[arr.length - 1]);  <--- This will always recall the last index of the array

//this is the Array class constructor
// let test = new Array(3);
// console.log(test);

// let test = new Array('This is a test');
// console.log(test);

// let test = new Array();
// test[0] = "did it work?"
// console.log(test);


//forEach method - Executes the supplied function for each element in the array
//The forEach method cannot return anything

// let boardGames = ["Monopoly", "Clue", "Risk", "Candy Land", "Catan"];

//for (let i = 0; i < boardGames.length; i++){
//  console.log(boardGames[i]);
//}

// Block body
// boardGames.forEach(game => {
//     console.log(game);
// }

//Concise Body
// boardGames.forEach(game => console.log(game));

//Anonymous Function
// boardGames.forEach(function (game) {
//     // console.log(game);
// })


let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];

//To access a specific element in an array, use bracket notation along with its index value
// console.log(shoppingList[0]);

// //Array.length - returns the number of elements in the array
// console.log(shoppingList.length)

//Array.push() - adds element to the end of the array
shoppingList.push("salt");
console.log(shoppingList);

//Array.unshift() - adds a new element at the beginning of the array
// shoppingList.unshift("salt");
// console.log(shoppingList);

// //Array.pop() - removes the last element in the array and returns that element
// let removedElement = shoppingList.pop();
// console.log(shoppingList);
// console.log(removedElement);

//Array.shift() - removes the first element in the array and returns that element
// shoppingList.shift();
// console.log(shoppingList);

//Array.map() - transforms the elements in the original array by calling the given function once for each element in the array
// console.log(shoppingList.map(item => item.toUpperCase()));
// let newShoppingList = shoppingList.map(item => item.toUpperCase());
// console.log(newShoppingList)

//Array.filter() - creates a new array with only the elements that pass the test in a given function
// let newShoppingList = shoppingList.filter(item => item.startsWith("l"));
// console.log(newShoppingList);

// //Array.find() - returns the first element in the array that passes a test given as a function
// let shoppingItem = shoppingList.find(item => item.startsWith("l"));
// console.log(shoppingList);

// //Array.includes() - determines whether an array has a specific element 
// let isIncluded = shoppingList.includes("limes");
// console.log(isIncluded);

// //Array.indexOf() - search the array for a specific element and returns its first index. Returns  -1 when element is not found
// console.log(shoppingList.indexOf("lemons"));
// console.log(shoppingList.indexOf("sale"));


//Array.findIndex() - returns the index of the first element in the array that passes the test in a given function
// let foundIndex = shoppingList.findIndex(item => item.startsWith("g"));
// console.log(foundIndex);

//Array.every() - check if all elements in an array pass a test given as a function. If there is 1 element that returns a false value, the functionreturns false and does not check the rest of the elements.
// console.log(shoppingList.every(item => item.length > 6));

//Array.concat() - merge two or more arrays, and returns a new array
// let anotherShoppingList = ["salt", "mint leaves", "olives"];
// let combinedArrays = shoppingList.concat(anotherShoppingList);
// console.log(combinedArrays);

//Array.slice() - selects a part of the array and returns a new array. Selects the elements starting the provided start argument and ends at, but does not include the provided end argument.
// let newArray = shoppingList.slice(0, 4);
// console.log(newArray);

//Array.splice() - adds/removes elements in the array and returns the removed elements. First argument takes in an integer that specifies at what index to add/remove elements. Second argument takes in the number of items to be removed. Optional third argument that takes in the new elements to be added to the array.
// shoppingList.splice(2,1);
// console.log(shoppingList);

// shoppingList.splice(2,1, "salt");
// console.log(shoppingList);

//Array.sort() - sorts the items in an array. The sort order can either be alphabetic or numberic, and either ascending or descending. By default, sort() orders the values as strings in alphabetical or asending order. Can take in a compare function which indicates if you want to sort by ascending or descending.
// console.log(shoppingList);
// console.log(shoppingList.sort());

// let costs = [3, 2, 13, 4];
// //want to sort by descending order
// console.log(costs.sort((a, b) => b - a));
// //want to sort by ascending order
// console.log(costs.sort((a, b) => a - b));

//Array.reverse() - reverses the order of the elements in the array
// console.log(shoppingList.reverse());

// //Array.toString() - converts the array into a string
// console.log(shoppingList.toString());

// //Array.join() - converts the elements in the array into a string. Can accept an optional parameter, "separator", whick indicates how the elements will be separated. Default separator is a coma
// console.log(shoppingList);
// console.log(shoppingList.join("! and "));

// //Lastly, an ES6 feature: the spread operator. The spread operator, indicated by these 3 dots "..." expands the contents of the array and takes it out of the array structure. 
// console.log(shoppingList);
// console.log(...shoppingList);

// let numArray = [20, 40, 60];
// function sum(numOne, numTwo, numThree){
//     return numOne + numTwo + numThree;
// }
// console.log(sum(...numArray));