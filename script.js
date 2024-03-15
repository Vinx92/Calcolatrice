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

for (let i = 0; i < NUMERI.length; i++) {
  NUMERI[i].addEventListener("click", () => {
    DISPLAY.textContent += NUMERI[i].value;
  });
}

for (let i = 0; i < OPERATORI.length; i++) {
  OPERATORI[i].addEventListener("click", () => {
    numeroUno = parseInt(DISPLAY.textContent);
    operatoreScelto = OPERATORI[i].value;
    console.log(
      `il numero ricordato e: ${typeof numeroUno}, l'operatore scelto e: ${typeof operatoreScelto}`
    );
    DISPLAY.textContent = "";
  });
}

UGUALE.addEventListener("click", () => {
  switch (operatoreScelto) {
    case "+":
      numeroDue = parseInt(DISPLAY.textContent);
      risultato = numeroUno + numeroDue;
      DISPLAY.textContent = risultato;
      break;

    case "-":
      numeroDue = parseInt(DISPLAY.textContent);
      risultato = numeroUno - numeroDue;
      DISPLAY.textContent = risultato;
      break;

    case "/":
      numeroDue = parseInt(DISPLAY.textContent);
      risultato = numeroUno / numeroDue;
      DISPLAY.textContent = risultato;
      break;

    case "*":
      numeroDue = parseInt(DISPLAY.textContent);
      risultato = numeroUno * numeroDue;
      DISPLAY.textContent = risultato;
      break;
  }
});

AC.addEventListener('click', () => {
    DISPLAY.textContent= ''
})
