console.log("connected!");

// ask the user for a favorite number.
let favNum = prompt("What is your favorite number?");
// print the user choice
console.log(favNum);

// if favNum is greater than or equal to 1000, console.log "Woah, that's a big number!"
if(favNum >= 1000){
    console.log("Woah, that's a big number!");
    // If favNum is greater than or equal to 0, console.log "That's a cool number."
} else if (favNum >= 0){
    console.log("That's a cool number.");
    //  If favNum is less than 0, console.log "Negative numbers?! That's just bananas."
} else if (favNum < 0) {
    console.log ("Negative numbers?! That's just bananas.");
    // else it was an invalid input  
} else {
    alert("I don't think this is a valid number!");
}

