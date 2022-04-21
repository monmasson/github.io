const startButton = document.getElementById('start-btn')
const questionBox = document.getElementById('question-box')
const questionElement= document.getElementById('question')
const answersElement = document.getElementById('answers')
let shuffleQuestions 
let currentQuestion





startButton.addEventListener('click', startGame)

function startGame(){
  // Checking in console console.log('start')// //yay!!! works!!!
 // console.log('start')//
 shuffleQuestions=questions.sort(() => Math.random())
 currentQuestion=0
}

function nextQuestion(){
  showQuestion(shuffleQuestions[currentQuestion])// for random question//
}

function showQuestion(question){
  questionElement.innerText = question.question
}

function selectAnswer(){}
//need a loop for questions and answers.//


const questions =[
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answer: [
      { text: '<script>' , correct: true},
      { text: '<js>', correct : false},
    ]
  },
  //need more questions and answers//
]
