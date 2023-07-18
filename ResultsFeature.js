const globalResults = [true, true, true, true, true, true, true, false, false, false];

// dichiaro l array con i risultati e gli applico dei valori per testare la funzione

const truePercentTarget = document.getElementById("truePercent");
const trueCounterTarget = document.getElementById("trueCounter");
const falsePercentTarget = document.getElementById("falsePercent");
const falseCounterTarget = document.getElementById("falseCounter");

// seleziono tutti gli elementi che devo andare a modificare con i valori ottenuti nella pagina

const globalResultsDisplay = function (resultsArr) {
  let trueresults = 0;
  let falseresults = 0;
  //salvo 2 variabili che saranno il numero di domande giuste e il numero di domande sbagliate
  for (i = 0; i < resultsArr.length; i++) {
    if (resultsArr[i] === true) {
      trueresults++;
    } else {
      falseresults++;
    }
  }
  // ciclo l array e vado a salvarmi i valori nelle 2 variabili definite
  console.log(trueresults);
  console.log(falseresults);
  let truesum = (trueresults / resultsArr.length) * 100;
  let falsesum = (falseresults / resultsArr.length) * 100;
  // ottengo la percentuale dividendo il valore per la lunghezza dell' array e moltiplicando il risultato per cento
  console.log(truesum, "%");
  console.log(falsesum, "%");
  truePercentTarget.innerText = `${truesum}%`;
  falsePercentTarget.innerText = `${falsesum}%`;
  trueCounterTarget.innerText = `${trueresults} / ${resultsArr.length} questions`;
  falseCounterTarget.innerText = `${falseresults} / ${resultsArr.length} questions`;
  // assegno i valori ottenuti come innertext agli elementi html in modo da riscriverli in modo dinamico alla fine della funzione
};
globalResultsDisplay(globalResults);
