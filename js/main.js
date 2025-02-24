

document.addEventListener("DOMContentLoaded", function () {
  let choices = document.querySelectorAll(".choice1");
  let playerHand = document.querySelector(".bottom-sec .fist");
  let computerHand = document.querySelector(".computer-section .fist");
  let resultText = document.querySelector(".center-text");
  let playerScoreEl = document.getElementById("player-score");
  let computerScoreEl = document.getElementById("computer-score");

  let playerScore = 0;
  let computerScore = 0;

  const choicesMap = {
    "✊": "Rock",
    "✋": "Paper",
    "✌️": "Scissors",
  };

  function getComputerChoice() {
    let emojis = ["✊", "✋", "✌️"];
    let randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }

  function getWinner(player, computer) {
    if (player == computer) {
      return "Draw";
    }
    if (
      (player === "✊" && computer === "✌️") || //  The Rock beats Scissors
      (player === "✋" && computer === "✊") || //The Paper covers Rock
      (player === "✌️" && computer === "✋") // and Scissors beats Paper
    ) {
      playerScore++;
      return "Player Wins";
    } else {
      computerScore++;
      return "Computer Wins";
    }
  }

  choices.forEach((choice) => {
    choice.addEventListener("click", function () {
      let playerChoice = this.querySelector("#emoji").textContent;
      let computerChoice = getComputerChoice();
      playerHand.textContent = playerChoice;
      computerHand.textContent = computerChoice;
      let result = getWinner(playerChoice, computerChoice);
      resultText.textContent = result;

      playerScoreEl.textContent = playerScore;
      computerScoreEl.textContent = computerScore;
    });
  });
});
