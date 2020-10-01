const buttons = document.querySelectorAll('.button');
const screen = document.querySelector('.screen');
const equalButton = document.querySelector('.button-equal');
const clearButton = document.querySelector('.button-clear');

// Loop through buttons and store on screen
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
        let num = buttons[i].getAttribute('data-num');
        screen.value += num;
    })
}

// Compute expression on screen
equalButton.addEventListener('click', function(){
    // what kind of sorcery is the eval function?
    let value = eval(screen.value);

    if (isNaN(value)) {
        alert('The input is empty, you moron')
        screen.value = '';
    }
    else {
        screen.value = value;
    }
})

// Clear screen
clearButton.addEventListener('click', function() {
    screen.value = '';
})


