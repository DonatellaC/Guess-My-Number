const checkButton = document.getElementById("check");
const numberToGuess = document.querySelector(".number");
const guessedNumber = document.querySelector(".guess");
const message = document.querySelector(".message");
const againButton = document.querySelector(".again");

//Number to guess
const randomNumber = Math.floor(Math.random() * 20) + 1;

//Check button
const handleCheck = () => {
  numberToGuess.textContent = randomNumber;
  if (guessedNumber.value === randomNumber) {
    message.textContent = "Correct!";
  } else {
    message.textContent = "Wrong guess! Try again!";
  }
};
checkButton.addEventListener("click", handleCheck);

// Again button
const handleAgain = () => {
  numberToGuess.textContent = "?";
  message.textContent = "Start guessing...";
  guessedNumber.value = "";
};
againButton.addEventListener("click", handleAgain);
