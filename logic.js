//Define global variables
var wordArray = ["Lux", "Ender", "Bruce", "Molly", "Solo", "Steel"];

//picks random word from array
var wordToGuess = wordArray[Math.floor(Math.random() * wordArray.length)];

//holds the number of characters in selected word
var wordLength = wordToGuess.length;

//splits the word into an array of letters.
var lettersInWord = wordToGuess.split("");

//holds the number of blanks needed
var numBlanks = [];

//holds user guess
var userGuess;

//wrong letters
var wrongLetters

//how many guesses are remaining
var numGuessesRemaining;

var winCount;
var lossCount;
//

//Random word is generated

$(document).ready(function(){

    function renderWord() { 
        console.log("wordToGuess" , wordToGuess);

        //grabs the length of the word and for each character pushes an underscore
      for (var i=0; i< wordLength; i++) {
        numBlanks.push(' __ ');
       $("#word-blanks").html(numBlanks);
      }
      //splits the letters apart in the word
      console.log("letters", lettersInWord)

    }

function checkLetter() {
    //user inputs guess
    document.onkeyup = function() {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log("user guess", userGuess);
        
var correctLetter = lettersInWord.indexOf(userGuess);
console.log("correct letter", correctLetter)

          if (correctLetter >=0 ){
              console.log("is in array");
          } else {
              console.log("is not in the array");
          }


          

      }
    }

renderWord();
checkLetter();

//User chooses letter
    //if letter is in word, letter populates in word-blanks
    //if letter is not in word, it will be displayed in wrong-guesses
    //guessesLeft counter goes down

    //if guessesLef=0, user loses, loss counter goes down by 1, user is prmopted to start over.
    //if all letters are guessed, win counter is updated, prmopted to start again.












})


