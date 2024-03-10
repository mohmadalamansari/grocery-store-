const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById("navbar");

if (bar){
   bar.addEventListener('click',()=>{
    nav.classList.add('active');
   })
}
if (close){
   close.addEventListener('click',()=>{
    nav.classList.remove('active');
   })
}

// script.js

// Get a reference to the button element by its ID
const button = document.querySelector('button');

// Get a reference to the element where you want to change the text
const changeTextElement = document.querySelector('#hero h1');

// Add a click event listener to the button
button.addEventListener('click', function () {
  // Change the text of the selected element
  changeTextElement.textContent = 'welcome to uhhh';
});

