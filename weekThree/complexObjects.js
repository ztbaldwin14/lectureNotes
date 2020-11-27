/*
************
  OBJECTS
************
    - The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities.

    MDN Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
*/

let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                episode: 1,
                episodeName: "Pilot"
            },
            {
                episode: 2,
                episodeName: "Diversity Day"
            },
            {
                episode: 3,
                episodeName: "Health Care"
            },
            {
                episode: 4,
                episodeName: "The Alliance"
            },
            {
                episode: 5,
                episodeName: "Basketball"
            },
            ]
        }
    },
    season2: {},
    season3: {}
};

console.log(netflix.season1.seasonInfo.episodeInfo[2].episodeName);

/*
    JSON OBJECTS

        - JSON stands for JavaScript Object Notation
        - The JSON syntax is derived from JavaScript Object Notation syntax, but the JSON format is text only
        - JSON exists as a string — useful when you want to fetch data from a server. It needs to be converted to a native JavaScript object if you want to access the data.

        - show them what JSON data looks like in browser ---> https://rickandmortyapi.com/api/character/
        - https://jsonformatter.org/ --- > paste in text from above

        - we will talk more about JSON data when we start working with API's
*/

/*
************
OBJECT BRACKET NOTATION/PROPERTY ACCESSORS 
************
    - Property accessors provide access to an object's properties by using the dot notation or the bracket notation.

    MDN Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

   https://docs.google.com/forms/d/e/1FAIpQLScvGgqArq0MC0-LnFcSiDon1wwUnwkbitNRlWL2nZhb5hHAPA/viewform
*/

let dog = {};

dog['name'] = 'Luna';
dog['breed'] = 'Siberian Husky';


console.log(dog);
console.log(dog['name'], dog['breed']);

// all keys in objects are strings, although they are not wrapped in quotes
let test = Object.keys(dog);
console.log(test);
console.log(typeof test[0]);

// Using square brackets is a good idea when you may not be able to use dot notatation to dig through an object
// I personally haven't ran into many situations where I haven't been able to use dot notation, but we still want to teach this to you guys so you're aware

// about the only time you would need to use object bracket notation is if the key you're trying to grab has spaces in it
let testObj = {
    "Spaces Here": true,
    noSpaces: true
}

console.log(testObj.noSpaces);
// notice how VSCode automatically correct us and places our key in brackets when we try to grab the key 'Spaces Here' using dot notation
console.log(testObj["Spaces Here"]);


  let contact = {};

  contact.name = "John";
  contact.phoneNumber = "3175555555";

  console.log(contact);

  contact["notes"] = "Best friend";

  console.log(contact);

  let hasName = contact.hasOwnProperty("name");

  console.log(hasName);

  delete contact.notes;

  console.log(contact);

  let newArray = Object.keys(contact);

  console.log(newArray);


 // https://docs.google.com/forms/d/e/1FAIpQLScvGgqArq0MC0-LnFcSiDon1wwUnwkbitNRlWL2nZhb5hHAPA/viewform
  let restaurantInfo = {
      restaurantName: "chikfila",
      yearBuilt: 1992,
      seating: "10-20",
  }