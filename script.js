const buttons = document.querySelectorAll(".button");
let userScore = 0;
let compScore = 0;
const userScorePara = document.querySelector(".userScore");
const compScorePara = document.querySelector(".compScore");
const msgContainer = document.querySelector(".win-loss-msg-container");

function drawGame() {
  msgContainer.innerText = "This Game Was Draw";
}

function getCompChoice() {
  let choices = ["Rock", "Paper", "Scisors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function gameWinner(userwin, userChoice, compChoice) {
  if (userwin) {
    msgContainer.innerText = `Your ${userChoice} beats ${compChoice} `;
    userScore++;
    userScorePara.innerText = userScore;
  } else {
    msgContainer.innerText = `computer's ${compChoice} beats Your ${userChoice}`;
    compScore++;
    compScorePara.innerText = compScore;
  }
}

function playGame(userChoice) {
  let compChoice = getCompChoice();
  console.log("userchoice", userChoice);
  console.log("compChoice", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userwin = true;
    if (userChoice === "Rock") {
      userwin = compChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      userwin = compChoice === "Scisors" ? false : true;
    } else if (userChoice === "Scisors") {
      userwin = compChoice === "Rock" ? false : true;
    }
    gameWinner(userwin, userChoice, compChoice);
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target);
    let userChoice = button.getAttribute("id");
    playGame(userChoice);
  });
});
