const body = document.body;

const title = document.createElement('h1');
title.innerText = 'Exercício 5.2 - JavaScript DOM';


const main = document.createElement('main');
main.classList.add('main-content');


const section = document.createElement('section');
section.classList.add('center-content');

const paragraph = document.createElement('p')
paragraph.innerText = 'Algum texto.';

const leftSection = document.createElement('section');
leftSection.classList.add('left-content');

const rightSection = document.createElement('section');
rightSection.classList.add('right-content');

const img = document.createElement('img');
img.classList.add('small-image');
img.setAttribute('src', 'https://picsum.photos/200');

const ul = document.createElement('ul');
const numberList = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']

for (number of numberList) {
  const li = document.createElement('li');
  li.innerText = number;
  ul.appendChild(li);
}

// insert to body;
body.appendChild(title);
body.appendChild(main);

// insert to main;
main.appendChild(section);
main.appendChild(leftSection);
main.appendChild(rightSection);

for (let index = 0; index < 4; index += 1) {
  const h3 = document.createElement('h3');
  main.appendChild(h3);
}

//insert to sections;
section.appendChild(paragraph);
leftSection.appendChild(img);
rightSection.appendChild(ul);