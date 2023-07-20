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
    correct_answer: "&#039;For&#039; loops",
    incorrect_answers: ["&#039;If&#039; Statements", "&#039;Do-while&#039; loops", "&#039;While&#039; loops"],
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
    question: "If you were to code software in this language you&#039;d only be able to type 0&#039;s and 1&#039;s.",
    correct_answer: "Binary",
    incorrect_answers: ["JavaScript", "C++", "Python"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does the Prt Sc button do?",
    correct_answer: "Captures what&#039;s on the screen and copies it to your clipboard",
    incorrect_answers: [
      "Nothing",
      "Saves a .png file of what&#039;s on the screen in your screenshots folder in photos",
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

let contatoreRisultati = 0;

const containerDiv = document.querySelector(".container");

const selectAnswer = function (event) {
  if (event.target.innerText === easyQuestions[index].correct_answer) {
    contatoreRisultati++;
  }
};

const quizCreation = function (arr, index) {
  const allAnswers = easyQuestions[index].incorrect_answers.map((copy) => copy);
  allAnswers.push(easyQuestions[index].correct_answer);
  allAnswers.forEach((element) => {
    const buttons = document.createElement("button");
    buttons.classList.add("answerbutton");
    buttons.innerText = element;
    buttons.onclick = selectAnswer;
    containerDiv.appendChild(buttons);
  });
};

quizCreation(easyQuestions, index);
