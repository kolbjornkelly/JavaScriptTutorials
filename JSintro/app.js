const name = 'Kelly';

function toUpper(text) {
    out = text.toUpperCase();
    console.log(out);
}

function adder(x, y) {
    console.log(x+y);
}

// toUpper('hei');

// Alternative way of writing a function 

const toLower = () => {
 // something
}

// String contatenation:

const age = 24;
// console.log(`Hello, it's me ${name} and my age is ${age}`);

// Arrays:

const arr = [`hei`, `hade`, `halla`];
arr.push(`snakkas`);

// Objects and 'this'

const user = {
    name: `Kelly`,
    age: 24,
    married: false,

    sayName: function() {
        console.log(this.name);
    }
};

// user.sayName();

// Loops 

for(word of arr) {
    // do something
    // console.log(word);
}

let loading = 10;

while(loading > 0) {
    // console.log(loading);
    loading--;
}

// Dom manipulation:

const str = document.querySelector(".title");
const changeColor = document.querySelector('.changeColor');


changeColor.addEventListener("click", function(){
    str.classList.toggle('change');
});