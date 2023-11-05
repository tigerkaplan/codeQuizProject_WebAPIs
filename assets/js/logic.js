
const startButton = document.getElementById('start');
const timeDisplay = document.getElementById('time');
const questionTitle = document.getElementById('question-title');
const choicesContainer = document.getElementById('choices');
const startScreen = document.getElementById('start-screen');
const endScreen = document.getElementById('end-screen');
const finalScore = document.getElementById('final-score');
const initialsInput = document.getElementById('initials');
const submitButton = document.getElementById('submit');
const feedback = document.getElementById('feedback');


var questionDiv = document.getElementById('questions');


let timer;
let timeLeft;
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  questionDiv.classList.remove("hide");
  timeLeft = 60;
  currentQuestionIndex = 0;
  score = 0;
  endScreen.classList.add('hide');
  startScreen.textContent="";
  startButton.classList.add('hide');
  questionTitle.classList.remove('hide');
  choicesContainer.classList.remove('hide');
  feedback.classList.add('hide');

  setNextQuestion();
  timer = setInterval(updateTimer, 1000);
}

function setNextQuestion() {
  currentQuestionIndex < questions.length;
  question = questions[currentQuestionIndex];
  questionTitle.textContent = questions[currentQuestionIndex].question;
  var answerOptions = questions[currentQuestionIndex].options;
  answer = questions[currentQuestionIndex].answer;
  choicesContainer.innerHTML = '';

  console.log(answerOptions)
//   for (let i = 0; i < answerOptions.length; i++) {
//     var choice=answerOptions[i];
//     const choiceButton = document.createElement('button');
//   choiceButton.textContent = choice;
//   choiceButton.addEventListener('click', () => checkAnswer(i));

//   choicesContainer.appendChild(choiceButton);
// }
  answerOptions.forEach((item)  => {
    let buttonEl = document.createElement('button');
    buttonEl.innerText = item;
    choicesContainer.appendChild(buttonEl);
  })
}

// function checkAnswer(selectedIndex) {
//   const question = questions[currentQuestionIndex];
//   if (question.correctIndex === selectedIndex) {
//     score += 10;
//     feedback.textContent = 'Correct!';
//   } else {
//     timeLeft -= 10;
//     feedback.textContent = 'Incorrect!';
//   }

//   feedback.classList.remove('hide');
//   currentQuestionIndex++;
//   setNextQuestion();
// }
function checkAnswer(selectedIndex) {
  const question = questions[currentQuestionIndex];
  const correctIndex = question.answer; // Assuming 'answer' is the correct index
  if (correctIndex === selectedIndex) {
    score += 10;
    feedback.textContent = 'Correct!';
  } else {
    timeLeft -= 10;
    feedback.textContent = 'Incorrect!';
  }

  feedback.classList.remove('hide');
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setNextQuestion();
  } else {
    endQuiz();
  }
}


function endQuiz() {
  clearInterval(timer);
  timeLeft = Math.max(timeLeft, 0);
  timeDisplay.textContent = timeLeft;
  questionTitle.classList.add('hide');
  choicesContainer.classList.add('hide');
  endScreen.classList.remove('hide');
  finalScore.textContent = score;
}

submitButton.addEventListener('click', () => {
  const initials = initialsInput.value;
  // Save initials and score, e.g., to local storage or send to a server.
  alert(`Score saved for ${initials}: ${score}`);
  initialsInput.value = '';
});

function updateTimer() {
  timeLeft--;
  timeDisplay.textContent = timeLeft;
  if (timeLeft <= 0) {
    endQuiz();
  }
}

startButton.addEventListener('click', startQuiz);
