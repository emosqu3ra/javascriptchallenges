// ARROWS W/ PARAMETERS
// EX. 1
let happy = (x, y) => {
    let happy = x + y;
    return happy;
}
console.log(happy);
console.log('You make', ' me happy!');

// EX. 2
let sad = (a, b, c) => {
    let sad = (a + b + c);
    console.log(sad)
}
sad('blue', ' jello', ' face');

// ARROWS W/ ARGUMENTS



// EXPRESSIONS W/ PARAMETERS
// EX. 1 
let myFood = function(d, e) {};
console.log(myFood);
console.log(myFood(35, 5));

// EX. 2
const belly = function(a, b) {
    return (a + b);
}
console.log(belly);
console.log(belly(5, 5));

// EXPRESSIONS W/ ARGUMENTS
// EX. 1
const my_function = function(favefood) {
    return (favefood + " is so yummy");
}
console.log(my_function);
console.log(my_function('pizza'));


// DECLARATIONS W/ PARAMETERS
// EX. 1
function calculateTotal(a, b) {
    return a * b;
}
console.log(calculateTotal);
console.log(calculateTotal(35, 5));

// EX. 2
function avg(val1, val2) {
    return val1 * val2;
}
console.log(avg);
console.log(avg(5, 20));

// EX. 3
function shmoney(a, b) {
    console.log(a, b);
}

shmoney('per Biggie Smalls', ' get money!');

// DECLARATIONS WITH ARGUMENTS