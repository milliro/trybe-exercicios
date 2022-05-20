const body = document.body;

const title = document.createElement('h1');
title.innerText = 'Exercício 5.2 - JavaScript DOM';


const main = document.createElement('main');
main.classList.add('main-content');


const section = document.createElement('section');
section.classList.add('center-content')

const paragraph = document.createElement('p')
paragraph.innerText = 'Algum texto.'

const leftSection = document.createElement('section');
leftSection.classList.add('left-content')

const rightSection = document.createElement('section');
rightSection.classList.add('right-content')

// insert to body;
body.appendChild(title);
body.appendChild(main);

// insert to main;
main.appendChild(section);
main.appendChild(leftSection);
main.appendChild(rightSection);

//insert to section;
section.appendChild(paragraph)