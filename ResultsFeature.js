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
  for (i = 0; i < resultsArr.length; i++) {
    if (resultsArr[i] === true) {
      trueresults++;
    } else {
      falseresults++;
    }
  }
  console.log(trueresults);
  console.log(falseresults);
  let truesum = (trueresults / resultsArr.length) * 100;
  let falsesum = (falseresults / resultsArr.length) * 100;
  console.log(truesum, "%");
  console.log(falsesum, "%");
  truePercentTarget.innerText = `${truesum}%`;
  falsePercentTarget.innerText = `${falsesum}%`;
  trueCounterTarget.innerText = `${trueresults} / ${resultsArr.length} questions`;
  falseCounterTarget.innerText = `${falseresults} / ${resultsArr.length} questions`;
};
globalResultsDisplay(globalResults);
