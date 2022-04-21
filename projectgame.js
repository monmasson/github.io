const startButton = document.getElementById('startGame')
const questionboxElement = document.getElementsById('question-box')
const questionElement= document.getElementById('questions')
const answersElement = document.getElementById('answers')
let shuffleQuestions = shuffleQuestions
let currentQuestion= currentQuestion




startButton.addEventListener('click', playGame)

function playGame(){
  // Checking in console console.log('start')// //yay!!! works!!!
 // console.log('start')//
 shuffleQuestions=questions.sort(() => Math.random())
 currentQuestion=0
}

function showQuestion(questions){}
//need a loop for questions and answers.//


function nextQuestion(){
  showQuestion(shuffleQuestions[currentQuestion])
}
//function selectAnswer(){}


const questions =[
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answer: [
      { text: '<script>' , correct: true},
            { text: '<js>', correct : false},
    ]
  }
  //need more questions and answers//
]
function test1(){}
