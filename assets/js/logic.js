//------------ Variable ------------
const questionEl = document.getElementById("questions");
const choicesEl = document.getElementById("choices");
const submitBtn = document.getElementById("submit");
const startBtn = document.getElementById("start");
const result = document.getElementById("result");
const timer = document.getElementById("time");
const endScreen = document.getElementById("end-screen");
const initials = document.getElementById("initials");

var timeEl;
var time = quizQuestions.length;

//variables in use
let currentQuiz = 0;
let score = 0;

//------------ Questions ------------
function loadQuiz() {
  // grabs  id element startScreen
  var startScreen = document.getElementById("start-screen");
  // hides start screen setting class attribute to hidden
  startScreen.setAttribute("class", "hide");
  // Display the quiz questions
  questionEl.removeAttribute("class", "visible");
  timeEl = setInterval(startTimer, 10000);
  displayQuestions();
}

function displayQuestions() {
  var currentQuizQuestion = quizQuestions[currentQuiz];
  var questionTitle = document.getElementById("question-title");

  questionTitle.textContent = currentQuizQuestion.question;

  choicesEl.innerHTML = "";
  currentQuizQuestion.choices.forEach(function(choice, i) {
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class", "choices");
    choiceBtn.setAttribute("value", choice);
    choiceBtn.textContent = choice; // Set the text content of the button
    choiceBtn.addEventListener("click", checkAnswer);
    // Append the button to the choices container

    choicesEl.appendChild(choiceBtn);
  });
}

function checkAnswer(event) {
  const answer = event.target.textContent;

  if (answer) {
    if (answer === quizQuestions[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizQuestions.length) {
      displayQuestions();
    } else {
      // Display results or take appropriate action when the quiz is over
      showResults();
    }
  }
}
startBtn.addEventListener("click", loadQuiz);

// Add an event listener to the submit button to check the answer

let count = 60;

function startTimer() {
  timer.textContent = count;
  const countdown = setInterval(() => {
    count--;
    timer.textContent = count;
    if (count <= 0) {
      clearInterval(countdown);
      showResults();
    }
  }, 1000);
}
//------------ Results ------------
function showResults() {
  questionEl.setAttribute("class", "hide");
  result.textContent = "Your final score is " + score;
  // Implement displaying the quiz results and handling the end of the quiz
  endScreen.setAttribute("class", "");

  function getSelected() {
    const answerEls = document.querySelectorAll(
      "input[type='radio'][name='answer']"
    );
    let answer = undefined;

    answerEls.forEach(answerEl => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }
  function deselectAnswers() {
    const answerEls = document.querySelectorAll(".answer");
    answerEls.forEach(answerEl => {
      answerEl.checked = false;
    });
  }

  submitBtn.addEventListener("click", () => {
    localStorage.setItem(initials.value, score);
    window.location.href = "highscores.html";
    console.log("hi");
  });
}
