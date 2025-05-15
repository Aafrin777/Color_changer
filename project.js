const button = document.querySelectorAll('.button');
const body = document.querySelector('body');
const head = document.querySelector('h1' );

/*
--------------------------------------------------
now we'll use loop to connect all button and function so that we can get all button later we'll use events listener so that it call listen click events

'click' , function on click we add callback function
-------------------------------------------------*/

button.forEach(function(button) {
    button.addEventListener('click' , function(event){

        //we tring to get value of id in event.target we'll get span by target
        if (event.target.id === 'grey') {
            // body.style.backgroundColor = 'grey'
            body.style.backgroundColor = event.target.id;
            head.style.color = 'white';
        }

        if (event.target.id === 'purple') {
            // body.style.backgroundColor = 'white';
            body.style.backgroundColor = event.target.id;
            head.style.color = 'white';
        }

        if (event.target.id === 'yellow') {
            // body.style.backgroundColor = 'yellow';
            body.style.backgroundColor = event.target.id;
            head.style.color = 'black';
        }
        
        if (event.target.id === 'blue') {
            // body.style.backgroundColor = 'blue';
            body.style.backgroundColor = event.target.id;
            head.style.color = 'white';
        }
    })
});

//event.target.id means same color as id