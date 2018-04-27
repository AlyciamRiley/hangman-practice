//Define global variables
var wordArray = ["lux", "ender", "bruce", "molly", "solo", "steel"];

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
var wrongLetters;

var matchedLetters = []

//how many guesses are remaining
var guessesLeft = 9;

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

function startGame() {
    //user inputs guess
    document.onkeyup = function() {
        
        console.log("user guess", userGuess);



        if (lettersInWord.indexOf(userGuess) >= 0) {
            console.log("Is in array")
            rebuildWordView();

        } else {
            console.log("is not in array");
            $("#wrong-guesses").append(userGuess);
            guessesLeft--;
            $("#guesses-left").text(guessesLeft);


        }
      }
    }

    function rebuildWordView () {
        //empty string
        var wordView = "";
        // Loop through letteres of the word we are trying to guess
        for (var j = 0; j < this.lettersInWord.length; j++) {
            //if current letter has been guesses, display that letter. 
            if (this.userGuess.indexOf(this.lettersInWord[j])
        !== -1) {
            wordView += this.lettersInWord[j];
        }
        else {
            wordView += "&nbsp;*&nbsp;";
            }
        }

        document.querySelector("#word-blanks").innerHTML = wordView;
    };
renderWord();
startGame();

});



