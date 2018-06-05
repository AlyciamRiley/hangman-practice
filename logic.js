//Page loads

//Random word is chosen from array

//blanks that represent the number of letters in word is displayed

//User guesses letter

//If letter is in word, letter appears in place of blank

//if letter is not in word, letter is displayed in "guessed letters" and guesses remaining goes down by 1

//If user correctly guesses word, win counter goes up by 1

//If user runs out of guesses, loss counter goes up by 1

//user is prompted if they want to play again

//Define global variables

var availableWords = [
  "javascript",
  "array",
  "variable",
  "forloop",
  "property",
  "callback"
];
var numBlanks = [];
var lettersGuessed = [];
var guessesRemaining = 10;
var wins = 0;
var losses = 0;

//Functions
//Page loads
function renderGame() {
  //Word to guess
  document.querySelector("#word-blanks").innerHTML = numBlanks.join("");
  //wrong guesses
  document.querySelector("#wrong-guesses").innerHTML = lettersGuessed;
  //guesses left
  document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;
  //Wins
  document.querySelector("#win-counter").innerHTML = wins;
  //Losses
  document.querySelector("#loss-counter").innerHTML = losses;
}
//Random word is chosen from array
function generateWord() {
  var randomWord =
    availableWords[Math.floor(Math.random() * availableWords.length)];
  console.log("randomWord: ", randomWord);
  //Split word up into individual characters
  var splitWord = randomWord.split("");
  console.log("split word: ", splitWord);
  //Loop over splitWord and display dashes??
  for (var i = 0; i < splitWord.length; i++) {
    numBlanks.push(" _ ");
  }
}

generateWord();
renderGame();
