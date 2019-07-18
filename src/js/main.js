"use strict";

const text = document.querySelector('.form__text--js');
const saveButton = document.querySelector('.save--js');
const loadButton = document.querySelector('.load--js');

saveButton.addEventListener('click', (e) => {
    localStorage.setItem('text', text.value);
});


loadButton.addEventListener('click', () =>{
text.value = localStorage.getItem('text')
})
