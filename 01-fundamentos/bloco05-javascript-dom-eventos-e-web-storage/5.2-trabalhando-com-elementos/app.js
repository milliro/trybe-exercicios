const body = document.body;

const title = document.createElement('h1');
title.innerText = 'Exercício 5.2 - JavaScript DOM';


const main = document.createElement('main')
main.classList.add('main-content')

// insert to body
body.appendChild(title)
body.appendChild(main)

console.log(main)