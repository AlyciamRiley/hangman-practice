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
var splitWord;
var guessedLetter;
var numBlanks = [];
var correctGuesses = [];
var numCorrect = 0;
var incorrectGuesses = [];
var guessesRemaining;
var wins = 0;
var losses = 0;
var youWon = false;

//Functions
//Page loads
function renderGame() {
  document.querySelector(".start-button").style.display = "none";
  document.querySelector(".play-again").style.display = "none";
  document.querySelector("#modal").style.display = "none";
  //Word to guess
  document.querySelector("#word-blanks").innerHTML = numBlanks.join("");
  //wrong guesses
  document.querySelector("#wrong-guesses").innerHTML = incorrectGuesses;
  //guesses left
  document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;
  //Wins
  document.querySelector("#win-counter").innerHTML = wins;
  //Losses
  document.querySelector("#loss-counter").innerHTML = losses;
}

//Random word is chosen from array
function generateWord() {
    document.querySelector("#modal").style.display = "none";
  var randomWord =
    availableWords[Math.floor(Math.random() * availableWords.length)];
  console.log("randomWord: ", randomWord);
  //Split word up into individual characters
    splitWord = randomWord.split("");
    guessesRemaining = splitWord.length + 5;
  //Loop over splitWord and display dashes??
  for (var i = 0; i < splitWord.length; i++) {
    numBlanks.push(" _ ");
  }
}

//get user input and compare
document.addEventListener('keydown', function (event) {
      
  guessedLetter = event.key;
  if (splitWord.includes(guessedLetter)) {
    //not pushing multiple instances of variable
    correctGuesses.push(guessedLetter)
    checkWinLose();
    displayCorrectGuesses();
 
    numCorrect++;
  } else {
    incorrectGuesses.push(guessedLetter);
  }
  guessesRemaining--;
  renderGame();
  checkWinLose(); 
});

//display correct guesses
function displayCorrectGuesses(){
  splitWord.forEach(function (item, i) { 
    var index = item.indexOf(guessedLetter);      
    if (index !== -1) {
      numBlanks[i] = guessedLetter; 
      
  } 
});
}


//check win/lose

function checkWinLose(){
  if (guessesRemaining <= 0) {
    numBlanks = [];
    losses++;
    document.querySelector("#modal").innerHTML = "You lose!";
    document.querySelector("#modal").style.display = "inline-block";
  } if (numCorrect == numBlanks.length) {
    wins++;
    numBlanks = [];
    document.querySelector("#win-lose-text").innerHTML = "You Win!";
    document.querySelector(".play-again").style.display = "inline-block";
    document.querySelector("#modal").style.display = "inline-block";
    document.querySelector("#win-counter").innerHTML = wins;



  }
}
  $(document).on("click", ".play-again", function () {
    guessedLetter = null;  
    correctGuesses= [];
    incorrectGuesses = [];    
    guessesRemaining = [];
    numCorrect = [];
    generateWord();
    renderGame();
  });

  generateWord();

