//const h1 = document.querySelector("h1");
//const p = document.querySelector("p");
//const param = document.querySelector(".param");
//const input = document.querySelector("input");

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const btn = document.querySelector("#calculate");
const form = document.querySelector("#form");
const pResult = document.querySelector("#resultado");

form.addEventListener("submit", sumar);

function sumar(event) {
  event.preventDefault();

  const sumaIn = input1.value + input2.value;
  pResult.innerText = sumaIn;
}

//investigar addeventlistener
//investigar preventDefault
