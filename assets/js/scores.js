

saveHighScore = (e) => {
  e.preventDefault();

  const score = {
      score: mostRecentScore,
      name: username.value,
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem('highScores', JSON.stringify(highScores));
  window.location.assign('/');
}

function displayingScore () {
  var hs1 = localStorage.getItem("he")
  document.getElementById("hs").textContent = hs1;
};

displayingScore ();