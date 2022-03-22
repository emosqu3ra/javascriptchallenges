console.log('connected!');

// writing a function 
function sum (a, b) {
    return a + b;
}
console.log(sum ( 5, 6));

//return the first element in an array
let value = [1, 2, 3, 4, 5, 6];

console.log(value[0]);

// write a function that converts minutes into seconds
function convertMinsToSecs (minutes) { return minutes * 60};

console.log (convertMinsToSecs(10));

// BONUS Create a function lessThan100 that will see if the sum is less than 100 or not
function lessThan100 (a,b) {
    if (a + b < 100) {return true} else {
        return false;
    }
};

console.log(lessThan100(2, 200));