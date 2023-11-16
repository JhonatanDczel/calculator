//Variables globales
const buttons = document.querySelector('.buttons');

//Creacion de botones de la interfaz

const toolBar = ['Ac', 'Del', 'C'];
const numPad = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operations = ['/', '*', '-', '+', '='];

const toolBarButtons = toolBar.map(element => {
  const toolBtn = document.createElement('button');
  toolBtn.id = element;
  toolBtn.textContent = element;
  return toolBtn;
});

const numPadButtons = numPad.map(element => {
  const numBtn = document.createElement('button');
  numBtn.id = element;
  numBtn.textContent = element;
  if (element == '0') numBtn.classList.add('horizontal');
  return numBtn;
});

const operationsButtons = operations.map(element => {
  const operatorBtn = document.createElement('button');
  operatorBtn.id = element;
  operatorBtn.textContent = element;
  return operatorBtn;
});

addButtons();
function addButtons() {
  for (let i = 0; i < 19; i++) {
    let btn;
    if ((i + 1) % 4 == 0 || i == 18) {
      btn = operationsButtons.shift();
    } else if (i < 3) {
      btn = toolBarButtons.shift();
    } else {
      btn = numPadButtons.shift();
    }
    buttons.appendChild(btn);
  }
}
