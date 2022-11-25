Bold buttons
============

Among the many HTML elements the div element always felt somewhat lonely. h1, h2, h3, h4, h5, and h6 are used to create 
important sounding titles, p for paragraphs, img for images, even head and body have their purpose. But divs are just
placed seemingly random inside the HTML code.

But could it be possible that they can do more? Let's find out.


The lonely divs
---------------

On the page you find two div elements that really would like to be a button. Can you help them?

Upon clicking on the div that says 'I want to be a button' the text of the div changes to 'I am a button now'.


The other div wants to be a button too
-------------------------------------

Use the same event listener from the previous task and add it to the div that says 'Press me too'.

Upon clicking on the div that says 'Press me too' the text of the div changes to 'I am a button now'. 


Select your favorit HTML element
--------------------------------

Add a event listener to the list that lists different HTML elements. 

Upon clicking on a list item a message that announces your favorite HTML element is printed to the console (for example
when I click on h4 ist says `My favorite HTML element is h4`).


Select your favorit food
------------------------

Add one event listener to the two ul elements inside the div with the id `my-favorite-food-panel`. When the user clicks
on any of the list elements write a message to the console that announces what the user clicked on. Don't use the id's
of the ul element to add the event listener!

Hint: find out if you can use the event.currentTarget property to find out if to which element the event listener was 
added.