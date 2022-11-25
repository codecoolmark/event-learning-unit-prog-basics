// solution for the first task
const iUnderstandButton = document.getElementById('i-understand-button');
iUnderstandButton.addEventListener('click', function() {
    console.log('So cool I just reacted to a click event');
});

// solution for the second task
const goalForHungary = document.getElementById('goal-for-hungary');
const goalForPoland = document.getElementById('goal-for-poland');
const goalForRomania = document.getElementById('goal-for-romania');
const goalForAustria = document.getElementById('goal-for-austria');

goalForHungary.addEventListener('click', function() {
    console.log('Hungary scored a goal!');
});

goalForPoland.addEventListener('click', function() {
    console.log('Poland scored a goal!');
});

goalForRomania.addEventListener('click', function() {
    console.log('Romania scored a goal!');
});

goalForAustria.addEventListener('click', function() {
    console.log('Austria scored a goal!');
});

// solution for the third task
const tellMeWhereMyMouseIs = document.getElementById('tell-me-where-my-mouse-is');

tellMeWhereMyMouseIs.addEventListener('click', function(event) {
    console.log(event.x, event.y);
});

// solution for the fourth task

const iSawAnimalButtons = document.querySelectorAll('.i-saw-animal-button');

iSawAnimalButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        if (event.target.innerText === 'I saw an elephant') {
            console.log('Elephant');
        } else if (event.target.innerText === 'I saw a snake') {
            console.log('Snake')
        } else if (event.target.innerText === 'I saw a ghost') {
            console.log('Ghost')
        } else if (event.target.innerText === 'I saw a monkey') {
            console.log('Monkey');
        } else if (event.target.innerText === 'I saw a kangaroo') {
            console.log('Kangaroo');
        } else if (event.target.innerText === 'I saw a parrot') {
            console.log('Parrot');
        }
    })
})

// solution for the fifth task

const increaseCounter = document.getElementById('increase-counter');
const decreaseCounter = document.getElementById('decrease-counter');
let counter = 0;

increaseCounter.addEventListener('click', function() {
    counter = counter + 1;
    console.log(counter);
});

decreaseCounter.addEventListener('click', function() {
    counter = counter - 1;
    console.log(counter);
})