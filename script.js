"use strict";

// get the check button element to add and event listener to start the logic of the game
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // check if there is no number then manipulating the textContent to no Number, and if there is no number the guess value is falsy and is 0
  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
  }
});
