function sayNumber(num){
    console.log(num)
};

for(let i = 0; i < 25; i++){
    sayNumber(i);
};

function calculatePriceIndiana(quantity, price){
    let totalPrice = 1.07 * quantity * price;
    return totalPrice; // Or return 1.07 * quantity * price;
}
console.log(calculatePriceIndiana(17, 5));