//Variables globales
const buttons = document.querySelector('.buttons');
const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');

//Creacion de botones de la interfaz

const toolBar = ['</>', 'Del', 'C'];
const numPad = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
const operations = ['/', '*', '-', '+', '='];

function makeButtons() {
  buttons.innerHTML = '';
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
  console.log('from makebuttons');
}
makeButtons();
window.addEventListener('resize', makeButtons);
