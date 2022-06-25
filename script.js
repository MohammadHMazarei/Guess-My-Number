"use strict";

//define secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// define a score variable to calculate score
let score = 20;

// highscore
let highscore = 0;

// get the check button element to add and event listener to start the logic of the game
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // game logice , all possible conditions :
  // when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
  }

  // when the guess is correct
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!";

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;

      document.querySelector(".highscore").textContent = highscore;
    }
  }

  // when the guess is out of range
  else if (guess > 20) {
    document.querySelector(".message").textContent = "Number out of range!!!";
  }

  // when the guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose the game!!!";
      document.querySelector(".score").textContent = 0;
    }
  }

  // when the guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose the game!!!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// again button event : reset the game page
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  document.querySelector(".message").textContent = "Start guessing...";

  document.querySelector(".score").textContent = score;

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});
