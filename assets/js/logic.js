
const questionEl = document.getElementById("questions");
const choicesEl = document.getElementById("choices");
const submitBtn = document.getElementById("submit");
const startBtn = document.getElementById("start")
const timer = document.getElementById("time")
var timeEl; 
var time=quizQuestions.length

    //variables in use
let currentQuiz = 0;
let score = 0;


function loadQuiz() {
   // grabs  id element startScreen
var startScreen = document.getElementById("start-screen")
   // hides start screen bey setting class attribute to hidden
startScreen.setAttribute("class", "hide");
   // Display the quiz questions
questionEl.removeAttribute("class", "visible");

timeEl=setInterval(startTimer, 10000 )

displayQuestions();
} 

function displayQuestions () {
  var currentQuizQuestion = quizQuestions[currentQuiz];
  var questionTitle = document.getElementById("question-title");

  questionTitle.textContent=currentQuizQuestion.question;
currentQuizQuestion.choices.forEach(function(choice, i) {

  var choiceBtn = document.createElement("button");
choiceBtn.setAttribute("class", "choices");

choiceBtn.setAttribute("value", choice);
tex
}
) 

}

loadQuiz();


// Add an event listener to the submit button to check the answer
submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === currentQuiz.correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // Display results or take appropriate action when the quiz is over
      showResults();
    }
  }
});



function startTimer() {
  let count = 60; // Set your desired countdown time
  timer.textContent = count; // Display the initial time

  const countdown = setInterval(() => {
    count--;
    timer.textContent = time; // Update the timer display

    if (count <= 0) {
      // Time's up, handle it as needed
      clearInterval(countdown); // Stop the countdown
    }
  }, 1000); // Update the timer every second (1000 ms)
}


function showResults() {
// Implement displaying the quiz results and handling the end of the quiz
// For example, you can show the user's score and provide an option to restart the quiz.
}
function getSelected() {
  const answerEls = document.querySelectorAll("input[type='radio'][name='answer']");
  let answer = undefined

  answerEls.forEach((answerEl) => {
  
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
function deselectAnswers() {
  const answerEls = document.querySelectorAll(".answer");
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const selectedAnswer = document.querySelector("input[name='answer']:checked");

  if (selectedAnswer) {
    if (selectedAnswer.value === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      showResults();
    }
  }
})