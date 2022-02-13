const checkButton = document.getElementById("check");
const numberToGuess = document.querySelector(".number");
const guessedNumber = document.querySelector(".guess");
const message = document.querySelector(".message");
const againButton = document.querySelector(".again");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");

let randomNumber = Math.floor(Math.random() * 20) + 1;
let scoreResult = 20;
let highscoreResult = 0;

const initialValues = () => {
  score.textContent = 20;
  highscoreResult.textContent = 0;
  guessedNumber.value = "";
  numberToGuess.textContent = "?";
  message.textContent = "Start guessing...";
  numberToGuess.value = randomNumber;
};
initialValues();

//Player wins
const handleCheck = () => {
  const guess = Number(guessedNumber.value);
  const numberToGuessValue = Number(numberToGuess.value);
  if (!guess || guess < 0 || guess > 20) {
    numberToGuess.textContent = "?";
    message.textContent = "⛔️ Insert a valid number!";
    //Correct number
  } else if (guess === randomNumber) {
    message.textContent = "Correct!";
    scoreResult++;
    score.textContent = scoreResult;
    document.body.style.backgroundColor = "#60b347";
    if (scoreResult > highscoreResult) {
      highscoreResult = scoreResult;
      highscore.textContent = highscoreResult;
    }
    numberToGuess.textContent = Number(numberToGuessValue);
    //Too high number
  } else if (guess > randomNumber) {
    message.textContent = "📈 The number is too high!";
    scoreResult--;
    //Too low number
  } else if (guess < randomNumber) {
    message.textContent = "📉 The number is too low!";
    scoreResult--;
  }
};
checkButton.addEventListener("click", handleCheck);

// Play again
const handleAgain = () => {
  let randomNumber = Math.floor(Math.random() * 20) + 1;
  numberToGuess.value = randomNumber;
  initialValues();
  document.body.style.backgroundColor = "#222";
};
againButton.addEventListener("click", handleAgain);
