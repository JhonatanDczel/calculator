//Variables globales
const numPad = document.querySelector('.numpad');
const toolBar = document.querySelector('.tool-bar');
const operations = document.querySelector('.operations');

//Creacion de interfaz
for (let i = 0; i < 10; i++) {
  const numBtn = document.createElement('button');
  numBtn.textContent = 9 - i;
  numPad.appendChild(numBtn);
  numBtn.classList.add('button');
  if (numBtn.textContent == 0) numBtn.classList.add('horizontal');
  if (i == 9) {
    const dotBtn = document.createElement('button');
    dotBtn.textContent = '.';
    numPad.appendChild(dotBtn);
    dotBtn.classList.add('button');
  }
}

for (let i = 0; i < 3; i++) {
  const toolBtn = document.createElement('button');
  toolBtn.classList.add('button');
  switch (i) {
    case 0:
      toolBtn.textContent = 'Ac';
      break;

    case 1:
      toolBtn.textContent = 'Del';
      break;

    case 2:
      toolBtn.textContent = 'C';
      break;
  }
  toolBar.appendChild(toolBtn);
}

for (let i = 0; i < 5; i++) {
  const operatorBtn = document.createElement('button');
  let symbols = ['/', '*', '-', '+', '='];
  operatorBtn.textContent = symbols[i];
  operatorBtn.classList.add('button');
  operations.appendChild(operatorBtn);
}
