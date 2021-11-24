const questions = [
  {
    question: "The Mayan and Aztec peoples used cocoa beans not only to make a delicious beverage but also as:",
    answer: [
      {text: 'fertilizer', correct: false},
      {text: 'medicine', correct: false},
      {text: 'currency', correct: true},
      {text: 'dye', correct: false},
    ],
  },
  {
    question: "How does chocolate grow?",
    answer: [
      {text: 'on trees', correct: true},
      {text: 'in the ground', correct: false},
      {text: 'on a bush', correct: false},
      {text: 'on a vine', correct: false},
    ],
  },
  {
    question: "With an average altitude of 1.56 miles,  what is the highest continent?",
    answer: [
      {text: 'Europe', correct: false},
      {text: 'Antarctica', correct: true},
      {text: 'North America', correct: false},
      {text: 'Asia', correct: false},
    ],
  },
  {
    question: "Where are most of the world’s cocoa beans grown?",
    answer: [
      {text: 'Côte d’Ivoire', correct: true},
      {text: 'Mexico', correct: false},
      {text: 'Indonesia', correct: false},
      {text: '"Brazil', correct: false},
    ],
  },
  {
    question: "Located near Lake Titicaca, what is the world's highest national capital?",
    answer: [
      {text: 'Katmandu, Nepal', correct: false},
      {text: 'Bern, switzerland', correct: false},
      {text: 'Addis Ababa, Ethiopia', correct: false},
      {text: 'La Paz, Bolivia', correct: true},
    ],
  },
  {
    question: "Which is the largest continent?",
    answer: [
      {text: 'Europe', correct: false},
      {text: 'Antarctica', correct: false},
      {text: 'North America', correct: false},
      {text: 'Asia', correct: true},
    ],
  },
  {
    question: "Measured from the base of ocean,  which is the tallest mountain?",
    answer: [
      {text: 'Mount Everest', correct: false},
      {text: 'Mount kiliminjaro', correct: true},
      {text: 'Mount fuji', correct: false},
      {text: 'Mount kea', correct: false},
    ]
  },
  
];
let suffledQuestions, currentQuestionIndex;
const nextButton = document.getElementById("next-btn")
const startButton = document.getElementById("start-btn");
const quizIntro = document.getElementById("quiz-introduction");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
startButton.addEventListener("click", startGame)
function startGame() {
quizIntro.classList.add("hide");
questionContainerElement.classList.remove("hide");
suffledQuestions = questions.sort(() => Math.random() - .5);
currentQuestionIndex = 0;
setNextQuestion();
}

function setNextQuestion() {
  resetState();
showQuestion(suffledQuestions[currentQuestionIndex]);
}

function resetState() {
  nextButton.classList.add("hide");
  while(answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}
function showQuestion(questions) {
  questionElement.innerText = questions.question;
  questions.answer.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("ans-btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
    
  });

}


function selectAnswer(e) {
const selectedButton = e.target;
const correct = selectedButton.dataset.correct;
Array.from(answerButtonsElement.children).forEach(button => {
  setStatusClass(button, button.dataset.correct);
});
nextButton.classList.remove("hide");
}
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if(correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("remove");

}
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
})