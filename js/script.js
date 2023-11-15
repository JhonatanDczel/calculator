//Creacion de interfaz
const numPad = document.querySelector('.numpad');

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
