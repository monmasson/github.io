const welcomeStartButton = document.getElementById('start-btn')

// the next button whicbh is displayed during a question page
// and will take the user to the next question (if applicable)
const nextButton = document.getElementById('next-btn')

const questionElementStorage = document.getElementById('question-box')
const questionElement= document.getElementById('question')
const answerButtonsElement = document.getElementById('answers')
const restartButton = document.getElementById('restart-btn')
const player1Display = document.getElementById("player1-display")
const player2Display = document.getElementById("player2-display")
const winnerDisplay = document.getElementById("winner");

let randomQuestionOrder 
let indexOfCurrentQuestion
let player1Score=0
let player2Score=0


/**
 * array containing the questionsArray which will\
 * be displayed to the user ==== >DONE
 */

 const questionsArray = [
   //question 1
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      {text: '<script>' , correct: true},
      { text:'<js>', correct : false},
    ]
  },
  //need more questions and answers// ===>DONE

  //question 2
  {
    question: "What is the correct JavaScript syntax to change the content of the HTML element below: <p id='demo'>This is a demonstration.</p>?",
    answers: [
      {text: '<document.getelemtsbyID ("demo"). inner.HTML = "Hello World!' , correct: false},
      { text:'<document.getelemtbyid ("demo"). inner.HTML = "Hello World!', correct : true},
    ]
  },
//question 3
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
      {text: 'The <head> section' , correct: true},
      { text:'The <body> section', correct: false},
    ]
  },
  //question 4
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answers: [
      {text: '<script href="xxx.js">' , correct: false},
      { text:'<script src= "xxx.js"> ', correct: true},
    ]
  },
//question 5
  {
    question: "The external JavaScript file must contain the <script> tag.?",
    answers: [
      {text: 'True' , correct: false},
      { text:'False ', correct: true},
    ]
  },
//question 6
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      {text: 'alert("Hello World")' , correct: true},
      { text:'alertBox("Hello World") ', correct: false},
    ]
  },
//question 7
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      {text: 'function: myfunction()' , correct: false},
      { text:'function = myFunction()', correct: true},
    ]
  },
  //question 8

  {
    question: 'Are you enjoying my app?',
    answers: [
      { text: 'Hmmm', correct: false },
      { text: 'YES!!!', correct: true },

    ]
  },

  //question 9
  //question 10
]

/**
 * adds the listeners to the start and next buttons
 * (gives an action to the buttons to do something)
 */
//======>DONE
//restartButton.addEventListener('click',restartGame )
welcomeStartButton.addEventListener('click', startTheGame)
nextButton.addEventListener('click', () => {
  indexOfCurrentQuestion++
  displayNextQuestion()
})


/** 
//call function which will determine whether the selected
 //* answer was correct and continue
 * @param {*} e represents the answer choice which was selected
 //
*/



 function selectAnswer(event) {
  const selectedButton = event.target
  const correct = selectedButton.dataset.correct
  statusSet(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    statusSet(button, button.dataset.correct)
  })
  if (randomQuestionOrder.length > indexOfCurrentQuestion + 1) {
    nextButton.classList.remove('hide')
  } else {
    welcomeStartButton.innerText = 'Restart'
    welcomeStartButton.classList.remove('hide')
  }
}

/**
 * call function to show the next question and reset
 * the panel screen with the next question
 */
 function displayNextQuestion() {
  resetState()
  displayQuestion(randomQuestionOrder[indexOfCurrentQuestion])
}

/**
 * call funtion to display the next question on the panel screen
 * @param {*} question parameter displays the question from the
 * const array that will be inputted into this function and displayed onto the panel screen
 */


 function displayQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
welcomeStartButton.addEventListener('click', startTheGame)
nextButton.addEventListener('click', () => {
  indexOfCurrentQuestion++
  displayNextQuestion()
})

/**
 * call function to begin the game
 */
 function startTheGame() {
welcomeStartButton.classList.add('hide')
  randomQuestionOrder = questionsArray.sort(() => Math.random())
  indexOfCurrentQuestion = 0
  questionElementStorage.classList.remove('hide')
  displayNextQuestion()
  winnerDisplay.textContent = ""
  player1Score=0
  player2Score=0
}

/**
 * call function which will reset the panel screen and continue
 * until there are no more questionsArray left
 */
 function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

/**
 *
 */
function statusSet(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

/**
 * 
 */
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

function addToScore(score, player){
  let value;
  if(correct=true){
      value = 2
  } else {
      value = Number(score)
  }

  if(player === "player1"){
      playerScore += value
      player1Display.textContent = player1Score
  }
  else (player === "player2")
  {
    playerScore += value
    player2Display.textContent=player2score
  }
}

function evaluateWinner(){
 let winner;
 if(player1Score === player2Score){
          winner = "DRAW"
      } else if(player1Score === 20 || player1Score > player2Score){
          winner = "PLAYER1"
      } else {
          winner = "PLAYER2"
      }

      displayWinner(winner)
  }   


  function displayWinner(winner){
    winnerDisplay.textContent = `${winner} WINS!`
    player2Display.textContent = player2Score
    welcomeStartButton.classList.toggle("hidden")
    nextButton.classList.toggle("hidden")
  }
}



//* let player1Score = 0;
//let player2Score = 0;
//const root = document.querySelector("");
//const view = new ScoreboardView(root, "Player 1", "Player 2", (player, direction) => {
	//const difference = direction === "minus" ? -1 : 1;

	//if (player === "one") {
		//player1Score = Math.max(player1Score + difference, 0);
	//} else {
	//	player2Score = Math.max(player2Score + difference, 0);
//	}

//	view.update(player1Score, player2Score);