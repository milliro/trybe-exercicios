function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const ulDays = document.querySelector('#days');
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const buttonsContainer = document.querySelector('.buttons-container');

dezDaysList.forEach(item => {
  const listItem = document.createElement('li')
  listItem.classList.add('day');

  if (item === 24 || item === 25 || item === 31) {
    listItem.innerText = item
    listItem.classList.add('holiday');
  }
  if (item === 4 || item === 11 || item === 18 || item === 25) {
    listItem.classList.add('friday');
  }
  listItem.innerText = item;
  ulDays.append(listItem);
})

const createButton = name => {
  const btn = document.createElement('button');
  btn.name = name;
  btn.innerText = name;
  btn.id = 'btn-holiday';
  buttonsContainer.append(btn);
}
createButton('Feriados');

const btnHoliday = document.querySelector('#btn-holiday');
const holidayLi = document.querySelectorAll('.holiday');

btnHoliday.addEventListener('click', () => {
  holidayLi.forEach(item => {
    if (item.style.backgroundColor !== 'rgba(0, 0, 0, 0.1)') {
      item.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    } else {
      item.style.backgroundColor = 'rgba(238, 238, 238, 1)';
    }
  })
})
