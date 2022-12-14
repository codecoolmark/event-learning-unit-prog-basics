Events around us
================

Events are all around us from birthdays, celebarations, new year, christmas, boring company events etc. 
Moreover everytime we interact with a computer, like clicking a mouse or pressing a key a event is generated.
In Javascript we can react to these events using so called event listeners. In this project we will explore event
listeners together.

React to button click
---------------------

In the starter code you find an index.html file. Create a script file that adds an event listener to the button with
the Text 'I understand'. Upon clicking the button your script should print 'So cool I just reacted to a click event' 
to the console.


In order to add a event listener to a HTML element we retrieve it from the HTML page using functions like `document.getElementById` or `document.querySelector`.

```
const myButton = document.getElementById('my-button');
```

Once we have the element we can use the `addEventListener` function to register a function that is called once the user clicks on a button:
```
myButton.addEventListener('click', function() {
    console.log('myButton was clicked!');
});
```

Stadion speaker
------------------

Of course you can also have multiple event listeners. Let's try this out. Add a new event listener to the buttons with
the id `goal-for-hungary`, `goal-for-poland`, `goal-for-rumania`, and `goal-for-austria`. Upon clicking one the button
it should print a message to the console that anounces a goal for a country depending on which button was clicked.

This means if the `Goal for Hungary` button is pressed `Hungary scored a goal!` is printed to the console, if the 
`Goal for Poland` button is pressed `Poland scored a goal!` is printed to the console.


Locate the mouse
----------------

Add a event listener to the button that says `Tell me where my mouse is`. Upon clicking the button the exact location of the mouse is printed to the console.

The function that we register as a event listener can also receive a parameter that contains informations about the event. Usually we call this parameter `e` or `event`.

```
myButton.addEventListener('click', function(event) {
    console.log('myButton was clicked!');
    // here we log the event parameter
    console.log(event);
});
```

You can use this parameter to find out all exact location of the mouse on the screen when the user clicked on the button.


Let's go to the Zoo
-------------------

Add a event listener to all the buttons in the Let's go to the Zoo section. Upon clicking the button the animal that
you saw is printed to the console. Moreover we ask you to do it with only one event listener for all the buttons.
This means you have to find out inside of the event listener what button was clicked.

The event parameter of our event listener contains a property called `target` that can be used to retrieve the exact HTML element the user clicked on. 
```
myButton.addEventListener('click', function(event) {
    console.log('myButton was clicked!');
    // here we log the event parameter
    console.log(event);
});
```


Increase, decrease
------------------

Create a counter that starts at zero. Every time the user clicks the `Increase the counter` button the counter is 
increased by one and the new value of the counter is printed to the console. Similarly the counter is decreased
by one if the user clicks on the `Decrease the counter` button and the new value of the counter is printed on the
console.

Hints
-----

Background materials
--------------------
 * [Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)