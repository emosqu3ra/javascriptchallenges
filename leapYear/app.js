console.log("I am connected!!!")

// ask user for a number
// % is a modulus
let userNum = prompt("Please enter a number of years!")

// if, else if statements to determine leap years 
if (userNum % 4 === 0){
    console.log("This is a common year!");
} else if (!userNum % 4 === 0){
    console.log("This is ODD!");
} else if (userNum % 100 !== 0){
    console.log(userNum + ",this is a leap year!")
} else if (userNum % 400 !== 0) {
    console.log (userNum + ",this is a common year!")
}
