let count = 0; 
const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.button');

// Loop over each button
buttons.forEach(function (button) {
    // Add eventListener to each button
    button.addEventListener('click', function(e) {
        // Save the pressed button
        const styles = e.currentTarget.classList;
        // re-do if-statements in case of reuse
        if(styles.contains('decrease')) {
            count--;
            if (count < 0) {
                value.style.color = 'red';
            }
            else if (count === 0) {
                value.style.color = 'black';
            }
        }
        else if(styles.contains('increase')) {
            count++;
            if (count > 0) {
                value.style.color = 'green';
            }
            else if (count === 0) {
                value.style.color = 'black';
            }
        }
        else if(styles.contains('reset')) {
            count = 0;
            value.style.color = 'black';
        }
        value.textContent = count; 
    });
});

