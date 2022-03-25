// Create a loop that console.log numbers from 0 to 30 one at a time 
for(let num = 0; num<=30; num++) {
  console.log(num);
}

// Create a loop that checks a boolean variable before executing a console.log statement and then updates that variable to false
let animal = 35
let zoo = true
while(zoo) {
    if (animal <= 35) {
        console.log('The zoo animals went loose!');
        zoo = false;
    } else { 
        animal--;
        console.log('The animals are not loose!');
    }
}

// Create a loop that checks a boolean variable before executing a console.log statement and then updates that variable to false, but always console.log something at least once

// Create a loop that console.log all squares of 2-4 to 4096 one at a time