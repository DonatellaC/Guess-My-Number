const checkButton = document.getElementById("check");
const numberToGuess = document.querySelector(".number");
const guessedNumber = document.querySelector(".guess");
const message = document.querySelector(".message");
const againButton = document.querySelector(".again");
const score = document.querySelector(".score");

//Number to guess
const randomNumber = Math.floor(Math.random() * 20) + 1;

//Check button
const handleCheck = () => {
  const guess = Number(guessedNumber.value);
  const numberToGuessValue = Number(numberToGuess.value);
  console.log(guess, typeof guess);
  numberToGuess.textContent = numberToGuessValue;
  if (guess === numberToGuessValue) {
    message.textContent = "Correct!";
  } else if (guess !== numberToGuessValue) {
    message.textContent = "Wrong guess! Try again!";
  }
};
checkButton.addEventListener("click", handleCheck);

// Again button
const handleAgain = () => {
  const randomNumber = Math.floor(Math.random() * 20) + 1;
  numberToGuess.textContent = "?";
  message.textContent = "Start guessing...";
  guessedNumber.value = "";
  console.log((numberToGuess.value = randomNumber));
  numberToGuess.value = randomNumber;
};
againButton.addEventListener("click", handleAgain);
