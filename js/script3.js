//Variables globales
const buttons = document.querySelector('.buttons');
//Creacion de botones de la interfaz
const toolBar = ['</>', 'Del', 'C'];
const numPad = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
const operations = ['÷', '×', '−', '+', '='];

makeButtons();
window.addEventListener('resize', makeButtons);

let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

const numberButtons = document.querySelectorAll('.numpad');
const equalsButton = document.getElementById('=');
equalsButton.classList.toggle('operations');
const operatorButtons = document.querySelectorAll('.operations');
const clearButton = document.getElementById('C');
const deleteButton = document.getElementById('Del');
const pointButton = document.getElementById('.');
const lastOperationScreen = document.getElementById('d1');
const currentOperationScreen = document.getElementById('d2');



window.addEventListener('keydown', handleKeyboardInput);
equalsButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteNumber);
pointButton.addEventListener('click', appendPoint);

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
);

function appendNumber(number) {
  if (currentOperationScreen.textContent === '0' || shouldResetScreen)
    resetScreen();
  currentOperationScreen.textContent += number;
}

function resetScreen() {
  currentOperationScreen.textContent = '';
  shouldResetScreen = false;
}

function clear() {
  currentOperationScreen.textContent = '0';
  lastOperationScreen.textContent = '';
  firstOperand = '';
  secondOperand = '';
  currentOperation = null;
}

function appendPoint() {
  if (shouldResetScreen) resetScreen();
  if (currentOperationScreen.textContent === '')
    currentOperationScreen.textContent = '0';
  if (currentOperationScreen.textContent.includes('.')) return;
  currentOperationScreen.textContent += '.';
}

function deleteNumber() {
  currentOperationScreen.textContent = currentOperationScreen.textContent
    .toString()
    .slice(0, -1);
}

function setOperation(operator) {
  if (currentOperation !== null) evaluate();
  firstOperand = currentOperationScreen.textContent;
  currentOperation = operator;
  lastOperationScreen.textContent = `${firstOperand} ${currentOperation}`;
  shouldResetScreen = true;
}

function evaluate() {
  if (currentOperation === null || shouldResetScreen) return;
  if (currentOperation === '÷' && currentOperationScreen.textContent === '0') {
    alert("You can't divide by 0!");
    return
  }
  secondOperand = currentOperationScreen.textContent;
  currentOperationScreen.textContent = roundResult(
    operate(currentOperation, firstOperand, secondOperand)
  );
  lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
  console.log('q fue');
  currentOperation = null;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function handleKeyboardInput(e) {
  if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
  if (e.key === '.') appendPoint();
  if (e.key === '=' || e.key === 'Enter') evaluate();
  if (e.key === 'Backspace') deleteNumber();
  if (e.key === 'Escape') clear();
  if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
    setOperation(convertOperator(e.key));
}

function convertOperator(keyboardOperator) {
  if (keyboardOperator === '/') return '÷';
  if (keyboardOperator === '*') return '×';
  if (keyboardOperator === '-') return '−';
  if (keyboardOperator === '+') return '+';
}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case '+':
      return add(a, b);
    case '−':
      return substract(a, b);
    case '×':
      return multiply(a, b);
    case '÷':
      if (b === 0) return null;
      else return divide(a, b);
    default:
      return null;
  }
}


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
  let darkMode = document.getElementById('</>');
  darkMode.addEventListener('click', () => {
    currentOperationScreen.textContent = 'I like coding';
    lastOperationScreen.textContent = "Hi, I'm Jhonatan! ツ";
  });
}
