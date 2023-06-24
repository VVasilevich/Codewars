// 1

function peopleWithAgeDrink(old) {
    let drink;

    if (old < 14) {
        drink = 'toddy';
    } else if (old < 18) {
        drink = 'coke';
    } else if (old < 21) {
        drink = 'beer';
    } else {
        drink = 'whisky';
    }
    return `drink ${drink}`
};

console.log(peopleWithAgeDrink(7));
console.log(peopleWithAgeDrink(15));
console.log(peopleWithAgeDrink(20));
console.log(peopleWithAgeDrink(30));

// 2

function peopleWithAgeDrink(old) {
    return old < 14 ? 'drink toddy' :
           old < 18 ? 'drink coke' :
           old < 21 ? 'drink beer' : 'drink whisky';
};

console.log(peopleWithAgeDrink(7));
console.log(peopleWithAgeDrink(15));
console.log(peopleWithAgeDrink(20));
console.log(peopleWithAgeDrink(30));