const easyQuestions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
    correct_answer: "Apple",
    incorrect_answers: ["Microsoft", "Atari", "Commodore"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In any programming language, what is the most common way to iterate through an array?",
    correct_answer: "For loops",
    incorrect_answers: ["If Statements", "Do-while loops", "While loops"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "When Gmail first launched, how much storage did it provide for your email?",
    correct_answer: "1GB",
    incorrect_answers: ["512MB", "5GB", "Unlimited"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What amount of bits commonly equals one byte?",
    correct_answer: "8",
    incorrect_answers: ["1", "2", "64"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "If you were to code software in this language you'd only be able to type 0s and 1s.",
    correct_answer: "Binary",
    incorrect_answers: ["JavaScript", "C++", "Python"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does the Prt Sc button do?",
    correct_answer: "Captures what's on the screen and copies it to your clipboard",
    incorrect_answers: [
      "Nothing",
      "Saves a .png file of what's on the screen in your screenshots folder in photos",
      "Closes all windows",
    ],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "How long is an IPv6 address?",
    correct_answer: "128 bits",
    incorrect_answers: ["32 bits", "64 bits", "128 bytes"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In computing, what does MIDI stand for?",
    correct_answer: "Musical Instrument Digital Interface",
    incorrect_answers: [
      "Musical Interface of Digital Instruments",
      "Modular Interface of Digital Instruments",
      "Musical Instrument Data Interface",
    ],
  },
];

const globalResults = [];
const allQuestions = document.getElementById("Questions");
const allButtons = document.getElementsByClassName("answerButton");

console.log(easyQuestions);
console.log(allButtons);

/* let overindex = 0;

const applyHTMLtext = function (arr, index) {
  allQuestions.innerText = arr[index].question;
  allButtons[0].innerText = arr[index].correct_answer;
  allButtons[1].innerText = arr[index].incorrect_answers[0];
  allButtons[2].innerText = arr[index].incorrect_answers[1];
  allButtons[3].innerText = arr[index].incorrect_answers[2];
};

applyHTMLtext(easyQuestions, overindex);

const quizEpicode = function (arr) {
  for (let i = 0; i < arr.length; ) {
    allQuestions.innerText = arr[i].question;
    console.log(allQuestions);
    allButtons[0].innerText = arr[i].correct_answer;
    allButtons[1].innerText = arr[i].incorrect_answers[0];
    allButtons[2].innerText = arr[i].incorrect_answers[1];
    allButtons[3].innerText = arr[i].incorrect_answers[2];
    console.log(allButtons);

    allButtons[0].onclick = () => {
      globalResults.push(true);
      overindexi++;
    };
    allButtons[(1, 2, 3)].onclick = () => {
      globalResults.push(false);
      i++;
    };
  }
}; 

console.log(globalResults);
quizEpicode(easyQuestions); 
*/

// ---------------------------- //

// clono incorrect answers x
// pusho la correct answer dentro il nuovo array x
// sull array clonato applichiamo forEach per crearci i bottoni x
// il foreach fornisce la singola risposta x
// per ogni risposta creiamo un bottone x
// applichiamo innertext e onclick x

// utilizziamo l event del click per leggere event.target.innerText che sara il testo del bottone
// confrontiamo l innerText con l arr[i].correct_answer per capire se la risposta e giusta o sbagliata
// se e giusta sommiamo 1 a un contatore
// appendere tutti i bottoni

let index = 0;

const containerDiv = document.querySelector(".container");

const hiddenElements = document.getElementsByClassName("hidden");

const pageCounter = function () {
  const questionCounter = [
    "Question 1/10",
    "Question 2/10",
    "Question 3/10",
    "Question 4/10",
    "Question 5/10",
    "Question 6/10",
    "Question 7/10",
    "Question 8/10",
    "Question 9/10",
    "Question 10/10",
  ];
  for (i = 0; i < questionCounter.length; i++) {}
  const counterBox = document.createElement("p");
  counterBox.className.add("counterbox");
  containerDiv.appendChild(counterBox);
};

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

const questionHalfBold = function (arr, index) {
  const onlyQuestions = [];
  for (let i = 0; i < arr.length; i++) {
    onlyQuestions.push(arr[i].question);
  }
  let questarr = onlyQuestions[index].split(" ");
  let firsthalfarr = questarr.slice(0, questarr.length / 2);
  let secondhalfarr = questarr.slice(questarr.length / 2, questarr.length);
  console.log(firsthalfarr);
  console.log(secondhalfarr);
  finalquestion = `${firsthalfarr.join(" ")} <span style="font-weight: 700">${secondhalfarr.join(" ")}</span>`;
  return finalquestion;
};

const selectAnswer = function (event) {
  if (index < 9) {
    if (event.target.innerText === easyQuestions[index].correct_answer) {
      globalResults.push(true);
    } else {
      globalResults.push(false);
    }
    containerDiv.innerHTML = "";
    index++;
    quizCreation(easyQuestions, index);
  } else {
    if (event.target.innerText === easyQuestions[index].correct_answer) {
      globalResults.push(true);
    } else {
      globalResults.push(false);
    }
    containerDiv.innerHTML = "";
    globalResultsDisplay(globalResults);
    for (i = 0; i < hiddenElements.length; i++) {
      hiddenElements[i].classList.remove("hidden");
    }
  }
};

console.log(hiddenElements);

const quizCreation = function (arr, index) {
  const questions = document.createElement("p");
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("buttonBox");

  questions.classList.add("questionspace");
  questions.innerText = easyQuestions[index].question;
  containerDiv.appendChild(questions);
  const allAnswers = easyQuestions[index].incorrect_answers.map((copy) => copy);
  allAnswers.push(easyQuestions[index].correct_answer);
  shuffleArray(allAnswers);

  allAnswers.forEach((element) => {
    const buttons = document.createElement("button");
    buttons.classList.add("answerbutton");
    buttons.innerText = element;
    buttons.addEventListener("click", (ev) => {
      if (ev.target.innerText === easyQuestions[index].correct_answer) {
        buttons.classList.add("greenColor");
      } else {
        buttons.classList.add("redColor");
      }
    });
    buttons.onclick = (event) => {
      setTimeout(() => {
        selectAnswer(event);
      }, 1000);
    };
    buttonContainer.appendChild(buttons);
  });
  containerDiv.appendChild(buttonContainer);
};

quizCreation(easyQuestions, index);

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
  if (trueresults < 6) {
    const congrats = document.getElementById("congrats");
    congrats.innerText = "Disaster!";
    const passtext = document.getElementById("passtext");
    passtext.innerText = "You failed the exam.";
  }
};

// setTimeout chiede una funzione come primo parametro e il numero di millisecondi per far scatenare la funzione come secondo parametro. Al momento del click, fuori dal timeout si valuta la domanda (verde = giusto; rosso = sbagliato); allo scadere dei millisecondi si scatena la funzione secondaria, ovvero mandare avanti il quiz alla domanda seguente.
