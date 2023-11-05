// Get the user's initials
const initials = document.getElementById("initials").value;

// Get the user's score
const score = document.getElementById("final-score").innerHTML;

// Save the user's initials and score to local storage
localStorage.setItem("initials", initials);
localStorage.setItem("score", score);