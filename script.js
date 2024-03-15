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
let risultatoCalcolato = false;
console.log(operatoreScelto);

for (let i = 0; i < NUMERI.length; i++) {
  NUMERI[i].addEventListener("click", () => {
    if(risultatoCalcolato === false) {
    DISPLAY.textContent += NUMERI[i].value;
    console.log(NUMERI[i])
  }else{
    return;
  }
  });
}

for (let i = 0; i < OPERATORI.length; i++) {
  OPERATORI[i].addEventListener("click", () => {
    if(operatoreScelto === undefined) {
    numeroUno = parseFloat(DISPLAY.textContent);
    operatoreScelto = OPERATORI[i].value;
    DISPLAY.textContent = "";
    DISPLAY_DUE.textContent = `${numeroUno} ${operatoreScelto}`;
    risultatoCalcolato = false;
  }else {
    switch (operatoreScelto) {
      case "+":
        numeroDue = parseInt(DISPLAY.textContent);
        risultato = numeroUno + numeroDue;
        DISPLAY.textContent = risultato;
        DISPLAY_DUE.textContent = `${numeroUno} ${operatoreScelto} ${numeroDue} ${UGUALE.value}`
        operatoreScelto = undefined;
        console.log(operatoreScelto)
        break;
  
      case "-":
        numeroDue = parseInt(DISPLAY.textContent);
        risultato = numeroUno - numeroDue;
        DISPLAY.textContent = risultato;
        DISPLAY_DUE.textContent = `${numeroUno} ${operatoreScelto} ${numeroDue} ${UGUALE.value}`
        operatoreScelto = undefined;
        console.log(operatoreScelto)
        break;
  
      case "/":
        numeroDue = parseInt(DISPLAY.textContent);
        risultato = numeroUno / numeroDue;
        DISPLAY.textContent = risultato;
        DISPLAY_DUE.textContent = `${numeroUno} ${operatoreScelto} ${numeroDue} ${UGUALE.value}`
        operatoreScelto = undefined;
        console.log(operatoreScelto)
        break;
  
      case "*":
        numeroDue = parseInt(DISPLAY.textContent);
        risultato = numeroUno * numeroDue;
        DISPLAY.textContent = risultato;
        DISPLAY_DUE.textContent = `${numeroUno} ${operatoreScelto} ${numeroDue} ${UGUALE.value}`
        operatoreScelto = undefined;
        console.log(operatoreScelto)
        break;
    }
  }
  });
}

UGUALE.addEventListener("click", () => {
  switch (operatoreScelto) {
    case "+":
      numeroDue = parseInt(DISPLAY.textContent);
      risultato = numeroUno + numeroDue;
      DISPLAY.textContent = risultato;
      DISPLAY_DUE.textContent = `${numeroUno} ${operatoreScelto} ${numeroDue} ${UGUALE.value}`
      operatoreScelto = undefined;
      console.log(operatoreScelto)
      risultatoCalcolato = true;
      break;

    case "-":
      numeroDue = parseInt(DISPLAY.textContent);
      risultato = numeroUno - numeroDue;
      DISPLAY.textContent = risultato;
      DISPLAY_DUE.textContent = `${numeroUno} ${operatoreScelto} ${numeroDue} ${UGUALE.value}`
      operatoreScelto = undefined;
      console.log(operatoreScelto)
      risultatoCalcolato = true;
      break;

    case "/":
      numeroDue = parseInt(DISPLAY.textContent);
      risultato = numeroUno / numeroDue;
      DISPLAY.textContent = risultato;
      DISPLAY_DUE.textContent = `${numeroUno} ${operatoreScelto} ${numeroDue} ${UGUALE.value}`
      operatoreScelto = undefined;
      console.log(operatoreScelto)
      risultatoCalcolato = true;
      break;

    case "*":
      numeroDue = parseInt(DISPLAY.textContent);
      risultato = numeroUno * numeroDue;
      DISPLAY.textContent = risultato;
      DISPLAY_DUE.textContent = `${numeroUno} ${operatoreScelto} ${numeroDue} ${UGUALE.value}`
      operatoreScelto = undefined;
      console.log(operatoreScelto)
      risultatoCalcolato = true;
      break;
  }
});

AC.addEventListener("click", () => {
  risultatoCalcolato = false
  DISPLAY.textContent = "";
});

AC.addEventListener('dblclick', () => {
  risultatoCalcolato = false
  DISPLAY_DUE.textContent = "";
})

CANCELLA.addEventListener('click', () => {
  let arrString = DISPLAY.textContent.split('')
  arrString.pop()
  DISPLAY.textContent = arrString.join('')
})
