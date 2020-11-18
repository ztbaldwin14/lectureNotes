//IF ELSE
let weather = 75;

if (weather < 70){
    console.log('wear a jacket');
} else{
    console.log('No jacket necessary!')
}

//you can blend complex conditionals and if-else statements based upon you need:
if (weather > 70 && typeof weather === 'number'){
    console.log('This weather is amazing!');
} else {
    console.log('Either the temperature is cool, the variable is not a string, or both');
}

//ELSE IF

//if-elseif statements can be chained

let age = 17;

if (age >= 25){
    console.log('yay! you can rent a car!');
} else if (age >= 21){
    console.log('Yay! You can drink!');
} else if (age >= 18){
    console.log('Yay! You can vote!');
} else {
    console.log('Sorry, you are too young to do anything fun');
}