"use strict";

//define secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// define a score variable to calculate score
let score = 20;

// highscore
let highscore = 0;

// functions :
// 1) display message :
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// 2) manipulate text of number class in HTML doc
const setNumbetTextContent = function (number) {
  document.querySelector(".number").textContent = number;
};

// 3) manipulate background color in css
const setBackgroundColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

// 4) manipulate width of number class style in css
const setNumberWidth = function (width) {
  document.querySelector(".number").style.width = width;
};

// 5) manipulate text content of score class
const setScoreTextContent = function (score) {
  document.querySelector(".score").textContent = score;
};

// get the check button element to add and event listener to start the logic of the game
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // game logice , all possible conditions :
  // when there is no input
  if (!guess) {
    displayMessage("No Number!");
  }

  // when the guess is correct
  else if (guess === secretNumber) {
    displayMessage("Correct Number!");

    setNumbetTextContent(secretNumber);

    setBackgroundColor("#60b347");

    setNumberWidth("30rem");

    if (score > highscore) {
      highscore = score;

      document.querySelector(".highscore").textContent = highscore;
    }
  }

  // when the guess is out of range
  else if (guess > 20) {
    displayMessage("Number out of range!!!");
  }

  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High" : "Too Low");
      score--;
      setScoreTextContent(score);
    } else {
      displayMessage("You lose the game!!!");
      setScoreTextContent(0);
    }
  }
});

// again button event : reset the game page
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  setNumbetTextContent("?");

  document.querySelector(".guess").value = "";

  displayMessage("Start guessing...");

  setScoreTextContent(score);

  setBackgroundColor("#222");

  setNumberWidth("15rem");
});
