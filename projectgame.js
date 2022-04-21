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
 score=0
}

function nextQuestion(){
  showQuestion(shuffleQuestions[currentQuestion])// for random question//
}

function showQuestion(question){
  questionElement.innerText = question.question
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
]

function restartGame(){}
function next(){}
