//Variables globales
const buttons = document.querySelector('.buttons');
const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
let firstNumber;
let secondNumber;
let d1Value = '';
let d2Value = '';
let operator = '';

//Creacion de funciones 
function operate(a, b, operation) {
  return operation(a, b);
}

function refreshDisplay() {
  if (d2Value[0] == '0') d2Value = d2Value.slice(1);
  if (d1Value == '') d1Value = '~';
  if (d2Value == '') d2Value = '0';
  display1.textContent = d1Value.slice(0, 9);
  display2.textContent = d2Value.slice(0, 9);
  d2Value = d2Value.slice(0, 9);
  d1Value = d1Value.slice(0, 9);
  console.log(`d1: ${d1Value}\n d2:${d2Value}`);
}
//Agregando funcionalidades 
buttons.addEventListener('click', e => {
  let btn = e.target;
  if (btn.classList.contains('numpad')) {
    d2Value += btn.textContent;
  }
  if (btn.id == 'Del') {
    d2Value = d2Value.slice(0, d2Value.length - 1);
  }
  if (btn.id == 'C') {
    d1Value = '';
    d2Value = '';
  }
  if (btn.id == '</>') {
    d1Value = 'Hi, I\'m';
    d2Value = 'Jhonatan!'
  }
  if (btn.classList.contains('operations') && btn.id != '=') {
    operator = btn.id;
    console.log(operator);
  }
  refreshDisplay();
});


//Creacion de botones de la interfaz

const toolBar = ['</>', 'Del', 'C'];
const numPad = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
const operations = ['/', '*', '-', '+', '='];
let buttonWidth = parseInt(window.getComputedStyle(buttons).getPropertyValue('width')) / 100 * 23.0;

const toolBarButtons = toolBar.map(element => {
  const toolBtn = document.createElement('button');
  toolBtn.id = element;
  toolBtn.textContent = element;
  toolBtn.classList.add('tool-bar');
  toolBtn.style.height = buttonWidth + 'px';
  toolBtn.style.width = buttonWidth + 'px';
  return toolBtn;
});

const numPadButtons = numPad.map(element => {
  const numBtn = document.createElement('button');
  numBtn.id = element;
  numBtn.textContent = element;
  numBtn.style.height = buttonWidth + 'px';
  numBtn.style.width = buttonWidth + 'px';
  numBtn.classList.add('numpad');
  if (element == '0') numBtn.style.width = buttonWidth * 2 + 'px';
  return numBtn;
});

const operationsButtons = operations.map(element => {
  const operatorBtn = document.createElement('button');
  operatorBtn.id = element;
  operatorBtn.textContent = element;
  operatorBtn.classList.add('operations');
  operatorBtn.style.height = buttonWidth + 'px';
  operatorBtn.style.width = buttonWidth + 'px';
  return operatorBtn;
});

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
addButtons();
