const DISPLAY = document.getElementById("display");
const DISPLAY_DUE = document.getElementById('displayDue')
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
    numeroUno = parseFloat(DISPLAY.textContent);
    operatoreScelto = OPERATORI[i].value;
    DISPLAY.textContent = "";
    DISPLAY_DUE.textContent = `${numeroUno} ${operatoreScelto}`
  });
}

UGUALE.addEventListener("click", () => {
  switch (operatoreScelto) {
    case "+":
      numeroDue = parseInt(DISPLAY.textContent);
      risultato = numeroUno + numeroDue;
      DISPLAY.textContent = risultato;
      DISPLAY_DUE.textContent = `${numeroUno} ${operatoreScelto} ${numeroDue} ${UGUALE.value}`
      ce = true;
      break;

    case "-":
      numeroDue = parseInt(DISPLAY.textContent);
      risultato = numeroUno - numeroDue;
      DISPLAY.textContent = risultato;
      DISPLAY_DUE.textContent = `${numeroUno} ${operatoreScelto} ${numeroDue} ${UGUALE.value}`
      ce = true;
      break;

    case "/":
      numeroDue = parseInt(DISPLAY.textContent);
      risultato = numeroUno / numeroDue;
      DISPLAY.textContent = risultato;
      DISPLAY_DUE.textContent = `${numeroUno} ${operatoreScelto} ${numeroDue} ${UGUALE.value}`
      ce = true;
      break;

    case "*":
      numeroDue = parseInt(DISPLAY.textContent);
      risultato = numeroUno * numeroDue;
      DISPLAY.textContent = risultato;
      DISPLAY_DUE.textContent = `${numeroUno} ${operatoreScelto} ${numeroDue} ${UGUALE.value}`
      ce = true;
      break;
  }
});

AC.addEventListener("click", () => {
  ce = false
  DISPLAY.textContent = "";
});

AC.addEventListener('dblclick', () => {
  ce = false
  DISPLAY_DUE.textContent = "";
})

CANCELLA.addEventListener('click', () => {
  let arrString = DISPLAY.textContent.split('')
  arrString.pop()
  DISPLAY.textContent = arrString.join('')
})
