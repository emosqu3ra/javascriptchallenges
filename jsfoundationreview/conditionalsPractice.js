// If...else statement 

month = 'December';
if (month =='November' && day !== 25 ) {
    console.log('Exacto Mondo!')
} else {
    console.log('Try again buttercup!')
};

// switch statement 

let weekday = 'tuesday';
switch (weekday) {
    case 'monday':
        console.log('Its Monday!')
        break;
    case 'tuesday':
        console.log('Its Tuesday!')
        break; 
    case 'wednesday':
        console.log('Its Wednesday!')
        break;  
    case 'thursday':
        console.log('Its Thursday!')
        break;  
    case 'friday':
        console.log('Its Friday!')
        break;   
    default:
        console.log('NOT a weekday.');
        break;            
}

// ternary operator 

let homeRoom = 'Ortiz';
(homeRoom !== 'Ortiz') ? console.log('This IS your Class!') : console.log('This is NOT your class!');

let goodie = 'Jolly Rancher';
(goodie !== 'Jolly Rancher') ? console.log('You got the candy woohoo!') : console.log('Awww its veggie sticks for you!');