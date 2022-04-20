
const difficultyLevel = document.getElementById("DIFFICULTY LEVEL");
const resultsContainer = document.getElementById("results");
const startButton = document.getElementById("startGame");
const restartButton = document.getElementById("restartGame");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const player1Score = document.getElementById("player1-score");
const player2Score = document.getElementById("player2-score");
const ul= document.getElementById('ul');
const nextButton =document.getElementById('buttonNext')
const questionBox = document.getElementsById("questionBox")
const opt1 =document.getElementsById('opt1')
const opt2 =document.getElementsById('opt2')





function questionBlock(){}
function selectAnswers(){}
function showResults(){}
function player1Id(){}
function player2Id(){}


var correct = 0;
var incorrect = 0;
var question = "none";
var answer = "none";
var answer = "none";

let currentQuestion = 0;

const javaQuestions = [
    {
        question1: "need question" ,
        answer1:{
            1: "need inputs",
            2 : "need inputs",
} ,
correctAnswer: "need input",
    } ,

   {
        question2: "need question" ,
        answer2:{
            1: "need inputs",
            2 : "need inputs",
} ,
correctAnswer: "need input",
    } ,

    
]

restartButton.addEventListener("click", restart);
startButton.addEventListener("click", startGame);

function calculateCorrectAnswers() {
    let count = 0;
    this.questions.forEach(el => {
      if (el.isCorrect) {
        count++;
      }
    });
    return count;
  }

  var score = function(){ 
	if(input == answer){ 
		correct = correct+1;
	
	}else{
		incorrect = incorrect+1;

	}
}
