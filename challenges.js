// write code to return the string 'odd' if 'num is an odd number
// and return the string 'even' if 'num' is an even number
let numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let oddorEven = (num) => {
    if (num % 2 === 0) {
        return console.log('even');
    }
    else {
        return console.log('odd');
    }
};

console.log(oddorEven(13));


// reverse the array
// write code to reverse the given array 

let numArr = [4, -6, 15, -1, 8];

let reverseArr = numArr.reverse();

console.log(reverseArr);