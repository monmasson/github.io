const startButton = document.getElementById('startGame')
const questionbox = document.getElementsById('question-box')
const question= document.getElementById('questions')
const answers = document.getElementById('answers')
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
]
