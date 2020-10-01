const quotes = [
    {
        name: 'Person 1',
        quote: 'hei'
    },
    {
        name: 'Person 2',
        quote: 'halla'
    },
    {
        name: 'Person 3',
        quote: 'hade'
    },
    {
        name: 'Person 4',
        quote: 'snakkas'
    }
]; 

const quoteButton = document.querySelector('#quoteButton');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteButton.addEventListener('click', displayQuote);

function displayQuote() {
    let randNum = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[randNum].name;
    quote.innerHTML = quotes[randNum].quote;
}