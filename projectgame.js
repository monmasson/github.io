const startButton = document.getElementById("start-btn")
const questionBox = document.getElementById("question-box")
const questionElement= document.getElementById("question")
const answersElement = document.getElementById("answers")
const restartButton = document.getElementById("restartGame")
const nextButton = document.getElementById("next")
let shuffleQuestions ={}
let currentQuestion={}
let score=0
const correctAnswer = 2;





startButton.addEventListener('click', startGame)
restartButton.addEventListener('click',restartGame )
nextButton.addEventListener('click' , next)


function startGame()
{
  // Checking in console console.log('start')// //yay!!! works!!!
 console.log('start')
 shuffleQuestions=questions.sort(() => Math.floor(Math.random() *  questions.length),
 currentQuestion=0,
 score=0)
}

function nextQuestion(){
  showQuestion(shuffleQuestions[currentQuestion])// for random question//
}

function showQuestion(question){
  questionElement.innerText = questionBox.question
}


function selectAnswer(){}
//need a loop for questions and answers.//


const questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      {option: '<script>' , correct: true},
      { option:'<js>', correct : false},
    ]
  },
  //need more questions and answers//
  {
    question: "What is the correct JavaScript syntax to change the content of the HTML element below: <p id='demo'>This is a demonstration.</p>?",
    answers: [
      {option: '<document.getelemtsbyID ("demo"). inner.HTML = "Hello World!' , correct: false},
      { option:'<document.getelemtbyid ("demo"). inner.HTML = "Hello World!', correct : true},
    ]
  },

  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
      {option: 'The <head> section' , correct: true},
      { option:'The <body> section', correct: false},
    ]
  },
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answers: [
      {option: '<script href="xxx.js">' , correct: false},
      { option:'<script src= "xxx.js"> ', correct: true},
    ]
  },

  {
    question: "The external JavaScript file must contain the <script> tag.?",
    answers: [
      {option: 'True' , correct: false},
      { option:'False ', correct: true},
    ]
  },

  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      {option: 'alert("Hello World")' , correct: true},
      { option:'alertBox("Hello World") ', correct: false},
    ]
  },

  {
    question: "How do you create a function in JavaScript?",
    answers: [
      {option: 'function: myfunction()' , correct: false},
      { option:'function = myFunction() ', correct: true},
    ]
  },
]

function restartGame(){}
function next(){}
