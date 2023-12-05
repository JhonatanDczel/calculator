const btn1 = document.getElementById("</>");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("0");
const btn4 = document.getElementById("6");
const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");

let event1 = false;
let event2 = false;
let event3 = false;
let event4 = false;
let time = 3000;

let desactivar = (ev) => {
  setTimeout(() => {
    ev = false;
    console.log("desactivado");
  }, time);
};

btn1.addEventListener("click", () => {
  event1 = true;
  console.log("Actived");
  desactivar(event1);
});

btn2.addEventListener("click", () => {
  event2 = true;
  console.log("Actived");
  desactivar(event2);
});

btn3.addEventListener("click", () => {
  event3 = true;
  console.log("Actived");
  desactivar(event3);
});

btn4.addEventListener("click", () => {
  event4 = true;
  console.log("Actived");
  if (event1 && event2 && event3 && event4) {
    d1.textContent = "Easter egg xd";
    d2.textContent = "No se que poner";
  }
  desactivar(event4);
});
