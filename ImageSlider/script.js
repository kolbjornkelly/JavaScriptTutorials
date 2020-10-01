const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const imgContainer = document.querySelector('.images');

let count = 0;

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

function nextSlide() { 
    imgContainer.animate([{opacity: '0.1'},{opacity: '1.0'}],
    {duration: 200, fill:'forwards'});
    
    count++;
    if (count > 3) {
        count = 0;
    }

    imgContainer.style.backgroundImage = `url(img/img${count}.JPG)`
}

function prevSlide() { 
    imgContainer.animate([{opacity: '0.1'},{opacity: '1.0'}],
    {duration: 200, fill:'forwards'});

    count--;
    if (count < 0) {
        count = 3;
    }

    imgContainer.style.backgroundImage = `url(img/img${count}.JPG)`
}