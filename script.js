const DISPLAY = document.getElementById("display");
const AC = document.getElementById("ac");
const CANCELLA = document.getElementById("cancella");
const UGUALE = document.getElementById("uguale");
const OPERATORI = document.querySelectorAll(".operatori");
const NUMERI = document.querySelectorAll(".numeri");
console.log(DISPLAY);
console.log(AC);
console.log(CANCELLA);
console.log(UGUALE);
console.log(OPERATORI);
console.log(NUMERI);
let operatoreScelto;
let numeroUno;
let numeroDue;
let risultato;
let ce = false;

for (let i = 0; i < NUMERI.length; i++) {
  NUMERI[i].addEventListener("click", () => {
    if(ce === false) {
    DISPLAY.textContent += NUMERI[i].value;
  }else{
    return;
  }
  });
}

for (let i = 0; i < OPERATORI.length; i++) {
  OPERATORI[i].addEventListener("click", () => {
    ce = false
    numeroUno = parseInt(DISPLAY.textContent);
    operatoreScelto = OPERATORI[i].value;
    DISPLAY.textContent = "";
  });
}

UGUALE.addEventListener("click", () => {
  switch (operatoreScelto) {
    case "+":
      numeroDue = parseInt(DISPLAY.textContent);
      risultato = numeroUno + numeroDue;
      DISPLAY.textContent = risultato;
      ce = true;
      break;

    case "-":
      numeroDue = parseInt(DISPLAY.textContent);
      risultato = numeroUno - numeroDue;
      DISPLAY.textContent = risultato;
      ce = true;
      break;

    case "/":
      numeroDue = parseInt(DISPLAY.textContent);
      risultato = numeroUno / numeroDue;
      DISPLAY.textContent = risultato;
      ce = true;
      break;

    case "*":
      numeroDue = parseInt(DISPLAY.textContent);
      risultato = numeroUno * numeroDue;
      DISPLAY.textContent = risultato;
      ce = true;
      break;
    case "%":
      numeroDue = parseInt(DISPLAY.textContent);
      risultato = numeroUno * numeroDue / 100;
      DISPLAY.textContent = risultato;
      ce = true;
      break;
  }
});

AC.addEventListener("click", () => {
  ce = false
  DISPLAY.textContent = "";
});

CANCELLA.addEventListener('click', () => {
  let arrString = DISPLAY.textContent.split('')
  arrString.pop()
  DISPLAY.textContent = arrString.join('')
})
