/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  let rectArea = l1 * l2;
  return rectArea;
}
console.log(area(13, 24));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2) {
  let sum = num1 + num2;
  if (num1 === num2) {
    return sum * 3;
  } else {
    return sum;
  }
}
console.log(crazySum(4, 6));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num3) {
  let absDiff = Math.abs(num3 - 19);
  if (num3 > 19) {
    absDiff * 3;
  }
  return absDiff;
}
console.log(crazyDiff(9));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if (20 > n <= 100 || n === 400) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}
console.log(boundary(80));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/*
function epify(eStr) {
  let words = eStr.split(" ");
  if (eStr.startsWith("EPICODE")) {
    return str;
  } else {
    return "EPICODE" + eStr;
  }
}
let strTxt = epify(" è una scuola");
console.log("strTxt");



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(number) {
  if ((number > 0 && number % 3 === 0) || number % 7 === 0) {
    return true;
  } else {
    return false;
  }
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str) {
  let revStr = str.split("").reverse().join("");
  return revStr;
}
console.log(reverseString("EPICODE"));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(str) {
  const words = str.split(" ");
  let finalStr = "";
  for (let i = 0; i < words; i++) {
    const firstChar = words[i].charAt(0).toUpperCase();
    const followingLetters = words[i].slice(1);
    const upperWord = firstChar + followingLetters;
    console.log(upperWord);
    finalStr.concat(upperWord);
  }
  return finalStr;
}
console.log;
upperFirst("hello world!");

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(str) {
  const modifiedStr = str.substring(1, str.length - 1);
  return modifiedStr;
  //return str.substring(1, str.length -1);
  //return str.slice(1, str.length -1);
}
console.log(cutstring("Epicode!"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    const randNum = Math.floor(Math.random() * 11);
    console.log("randNum", randNum);
    arr.push(randNum);
  }

  return arr;
}

giveMeRandom(6);
