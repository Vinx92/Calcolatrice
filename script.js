const DISPLAY = document.getElementById("display");
const DISPLAY_DUE = document.getElementById("displayDue");
const AC = document.getElementById("ac");
const CANCELLA = document.getElementById("cancella");
const UGUALE = document.getElementById("uguale");
const OPERATORI = document.querySelectorAll(".operatori");
const NUMERI = document.querySelectorAll(".numeri");
let operatoreScelto;
let numeroUno;
let numeroDue;
let risultato;
let risultatoCalcolato = false;

for (let i = 0; i < NUMERI.length; i++) {
  NUMERI[i].addEventListener("click", () => {
    if (DISPLAY_DUE.textContent.includes(".") && NUMERI[i].value === ".") {
      return;
    }
    if (risultatoCalcolato === false) {
      DISPLAY_DUE.textContent += NUMERI[i].value;
    } else {
      return;
    }
  });
}

for (let i = 0; i < OPERATORI.length; i++) {
  OPERATORI[i].addEventListener("click", () => {
    if (operatoreScelto === undefined) {
      numeroUno = parseFloat(DISPLAY_DUE.textContent);
      operatoreScelto = OPERATORI[i].value;
      DISPLAY_DUE.textContent = "";
      DISPLAY.textContent = `${numeroUno} ${operatoreScelto}`;
      risultatoCalcolato = false;
    } else {
      switch (operatoreScelto) {
        case "+":
          risultato = numeroUno + parseFloat(DISPLAY_DUE.textContent);
          numeroUno = risultato;
          operatoreScelto = OPERATORI[i].value;
          DISPLAY_DUE.textContent = "";
          DISPLAY.textContent = `${numeroUno} ${operatoreScelto}`;
          break;
        case "-":
          risultato = numeroUno - parseFloat(DISPLAY_DUE.textContent);
          numeroUno = risultato;
          operatoreScelto = OPERATORI[i].value;
          DISPLAY_DUE.textContent = "";
          DISPLAY.textContent = `${numeroUno} ${operatoreScelto}`;
          break;
        case "/":
          risultato = numeroUno / parseFloat(DISPLAY_DUE.textContent);
          numeroUno = risultato;
          operatoreScelto = OPERATORI[i].value;
          DISPLAY_DUE.textContent = "";
          DISPLAY.textContent = `${numeroUno} ${operatoreScelto}`;
          break;
        case "*":
          risultato = numeroUno * parseFloat(DISPLAY_DUE.textContent);
          numeroUno = risultato;
          operatoreScelto = OPERATORI[i].value;
          DISPLAY_DUE.textContent = "";
          DISPLAY.textContent = `${numeroUno} ${operatoreScelto}`;
          break;
      }
    }
  });
}

UGUALE.addEventListener("click", () => {
  switch (operatoreScelto) {
    case "+":
      numeroDue = parseInt(DISPLAY_DUE.textContent);
      risultato = numeroUno + numeroDue;
      DISPLAY_DUE.textContent = risultato;
      DISPLAY.textContent = `${numeroUno} ${operatoreScelto} ${numeroDue} ${UGUALE.value}`;
      risultatoCalcolato = true;
      numeroUno = undefined;
      numeroDue = undefined;
      risultato = undefined;
      operatoreScelto = undefined;
      break;

    case "-":
      numeroDue = parseInt(DISPLAY_DUE.textContent);
      risultato = numeroUno - numeroDue;
      DISPLAY_DUE.textContent = risultato;
      DISPLAY.textContent = `${numeroUno} ${operatoreScelto} ${numeroDue} ${UGUALE.value}`;
      risultatoCalcolato = true;
      numeroUno = undefined;
      numeroDue = undefined;
      risultato = undefined;
      operatoreScelto = undefined;
      break;

    case "/":
      numeroDue = parseInt(DISPLAY_DUE.textContent);
      risultato = numeroUno / numeroDue;
      DISPLAY_DUE.textContent = risultato;
      DISPLAY.textContent = `${numeroUno} ${operatoreScelto} ${numeroDue} ${UGUALE.value}`;
      risultatoCalcolato = true;
      numeroUno = undefined;
      numeroDue = undefined;
      risultato = undefined;
      operatoreScelto = undefined;
      break;

    case "*":
      numeroDue = parseInt(DISPLAY_DUE.textContent);
      risultato = numeroUno * numeroDue;
      DISPLAY_DUE.textContent = risultato;
      DISPLAY.textContent = `${numeroUno} ${operatoreScelto} ${numeroDue} ${UGUALE.value}`;
      risultatoCalcolato = true;
      numeroUno = undefined;
      numeroDue = undefined;
      risultato = undefined;
      operatoreScelto = undefined;
      break;
  }
});

AC.addEventListener("click", () => {
  risultatoCalcolato = false;
  numeroUno = undefined;
  numeroDue = undefined;
  risultato = undefined;
  operatoreScelto = undefined;
  DISPLAY_DUE.textContent = "";
});

AC.addEventListener("dblclick", () => {
  DISPLAY.textContent = "";
});

CANCELLA.addEventListener("click", () => {
  let arrString = DISPLAY_DUE.textContent.split("");
  arrString.pop();
  DISPLAY_DUE.textContent = arrString.join("");
});
