// Skip to content
// Projects
// Groups
// More
// This project

// Search
 
// M
// University-of-Minnesota-Boot-Camp
// MINSTP201711FSF2-Class-Repository-FSF
// Repository
// master
// 11-06-2017-St-Paul-Class-Repository-FSF   01-Class-Content   03-javascript   02-Homework   Solutions   week3_Hangman_alt_80s_solution   hangmanGame.js
 
// Brian David's avatar
// Adding Week 3 homework solution.
// Brian David authored 4 months ago
// cbe918e3
//  hangmanGame.js 8.83 KB
 
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
// 25
// 26
// 27
// 28
// 29
// 30
// 31
// 32
// 33
// 34
// 35
// 36
// 37
// 38
// 39
// 40
// 41
// 42
// 43
// 44
// 45
// 46
// 47
// 48
// 49
// 50
// 51
// 52
// 53
// 54
// 55
// 56
// 57
// 58
// 59
// 60
// 61
// 62
// 63
// 64
// 65
// 66
// 67
// 68
// 69
// 70
// 71
// 72
// 73
// 74
// 75
// 76
// 77
// 78
// 79
// 80
// 81
// 82
// 83
// 84
// 85
// 86
// 87
// 88
// 89
// 90
// 91
// 92
// 93
// 94
// 95
// 96
// 97
// 98
// 99
// 100
// 101
// 102
// 103
// 104
// 105
// 106
// 107
// 108
// 109
// 110
// 111
// 112
// 113
// 114
// 115
// 116
// 117
// 118
// 119
// 120
// 121
// 122
// 123
// 124
// 125
// 126
// 127
// 128
// 129
// 130
// 131
// 132
// 133
// 134
// 135
// 136
// 137
// 138
// 139
// 140
// 141
// 142
// 143
// 144
// 145
// 146
// 147
// 148
// 149
// 150
// 151
// 152
// 153
// 154
// 155
// 156
// 157
// 158
// 159
// 160
// 161
// 162
// 163
// 164
// 165
// 166
// 167
// 168
// 169
// 170
// 171
// 172
// 173
// 174
// 175
// 176
// 177
// 178
// 179
// 180
// 181
// 182
// 183
// 184
// 185
// 186
// 187
// 188
// 189
// 190
// 191
// 192
// 193
// 194
// 195
// 196
// 197
// 198
// 199
// 200
// 201
// 202
// 203
// 204
// 205
// 206
// 207
// 208
// 209
// 210
// 211
// 212
// 213
// 214
// 215
// 216
// 217
// 218
// 219
// 220
// 221
// 222
// 223
// 224
// 225
// 226
// 227
// 228
// 229
// 230
// 231
// 232
// 233
// 234
// 235
// 236
// 237
// 238
// 239
// 240
// 241
// 242
// 243
// 244
// 245
// 246
// 247
// 248
// 249
// 250
// 251
// 252
// 253
// 254
// // Creating a giant hangmanGame object that will house all of our logic and variables.
// var hangmanGame = {
//   // Object of all words that can be chosen, along with info such as their picture and a song clip.
//   wordsToPick: {
//     genesis: {
//       picture: "genesis.jpg",
//       song: "Illegal Alien",
//       preview: "https://p.scdn.co/mp3-preview/b29a2b925b9654e0efaaff37504fd234307e0ad8"
//     },
//     madonna: {
//       picture: "madonna.jpg",
//       song: "Material Girl",
//       preview: "https://p.scdn.co/mp3-preview/5ff7f7b7d2af1a747da275bed3c49054c01b5b1c"
//     },
//     toto: {
//       picture: "toto.jpg",
//       song: "Rosanna",
//       preview: "https://p.scdn.co/mp3-preview/7cef811eaeb7c7b98245750e73d9d68e9008f317"
//     },
//     queen: {
//       picture: "queen.jpg",
//       song: "Princes of the Universe",
//       preview: "https://p.scdn.co/mp3-preview/b84f24300476f3d3f20056d2388cc51db2e3891f"
//     },
//     u2: {
//       picture: "u2.jpg",
//       song: "With or Without You",
//       preview: "https://p.scdn.co/mp3-preview/28365dff1890075c1371628371cd0e5bbff9a3a3"
//     },
//     metallica: {
//       picture: "metallica.jpg",
//       song: "Master of Puppets",
//       preview: "https://p.scdn.co/mp3-preview/60e6f8dab43f176dd9fb5e795d4e6459bad52e9e"
//     },
//     journey: {
//       picture: "journey.jpg",
//       song: "Don't Stop Believin'",
//       preview: "https://p.scdn.co/mp3-preview/21b9abd3cd2eea634e17a917196fdd5ba2e82670"
//     },
//     inxs: {
//       picture: "inxs.jpg",
//       song: "Need You Tonight",
//       preview: "https://p.scdn.co/mp3-preview/61b17a335d5afc1c4086b1b08e2400f0da147977"
//     },
//     poison: {
//       picture: "poison.jpg",
//       song: "Fallen Angel",
//       preview: "https://p.scdn.co/mp3-preview/0365ad1f152f1834b42b857c4625191cebf9f987"
//     },
//     rush: {
//       picture: "rush.jpg",
//       song: "Limelight",
//       preview: "https://p.scdn.co/mp3-preview/154987dfb07f2fc5ed7aa4d76b80c5dc08ff4d6b"
//     },
//     blondie: {
//       picture: "blondie.jpg",
//       song: "Call Me",
//       preview: "https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90"
//     }
//   },
//   // Variables that set the initial state of our hangman game.
//   wordInPlay: null,
//   lettersOfTheWord: [],
//   matchedLetters: [],
//   guessedLetters: [],
//   guessesLeft: 0,
//   totalGuesses: 0,
//   letterGuessed: null,
//   wins: 0,
//   // The setupGame method is called when the page first loads.
//   setupGame: function() {
//     // Here we pick a random word.
//     var objKeys = Object.keys(this.wordsToPick);
//     this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];
//     // Split the chosen word up into its individual letters.
//     this.lettersOfTheWord = this.wordInPlay.split("");
//     // Builds the representation of the word we are trying to guess and displays it on the page.
//     // At the start it will be all underscores since we haven't guessed any letters ("_ _ _ _").
//     this.rebuildWordView();
//     // This function sets the number of guesses the user gets, and renders it to the HTML.
//     this.processUpdateTotalGuesses();
//   },
//   // This function is run whenever the user guesses a letter..
//   updatePage: function(letter) {
//     // If the user has no guesses left, restart the game.
//     if (this.guessesLeft === 0) {
//       this.restartGame();
//     }
//     // Otherwise...
//     else {
//       // Check for and handle incorrect guesses.
//       this.updateGuesses(letter);
//       // Check for and handle correct guesses.
//       this.updateMatchedLetters(letter);
//       // Rebuild the view of the word. Guessed letters are revealed, unguessed letters have a "_".
//       this.rebuildWordView();
//       // If the user wins, restart the game.
//       if (this.updateWins() === true) {
//         this.restartGame();
//       }
//     }
//   },
//   // This function governs what happens when the user makes an incorrect guess (that they haven't guessed before).
//   updateGuesses: function(letter) {
//     // If the letter is not in the guessedLetters array, and the letter is not in the lettersOfTheWord array..
//     if ((this.guessedLetters.indexOf(letter) === -1) && (this.lettersOfTheWord.indexOf(letter) === -1)) {
//       // Add the letter to the guessedLetters array.
//       this.guessedLetters.push(letter);
//       // Decrease guesses by one.
//       this.guessesLeft--;
//       // Update guesses remaining and guesses letters on the page.
//       document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
//       document.querySelector("#guessed-letters").innerHTML =
//       this.guessedLetters.join(", ");
//     }
//   },
//   // This function sets the initial guesses the user gets.
//   processUpdateTotalGuesses: function() {
//     // The user will get more guesses the longer the word is.
//     this.totalGuesses = this.lettersOfTheWord.length + 5;
//     this.guessesLeft = this.totalGuesses;
//     // Render the guesses left to the page.
//     document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
//   },
//   // This function governs what happens if the user makes a successful guess.
//   updateMatchedLetters: function(letter) {
//     // Loop through the letters of the "solution".
//     for (var i = 0; i < this.lettersOfTheWord.length; i++) {
//       // If the guessed letter is in the solution, and we haven't guessed it already..
//       if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
//         // Push the newly guessed letter into the matchedLetters array.
//         this.matchedLetters.push(letter);
//       }
//     }
//   },
//   // This function builds the display of the word that is currently being guessed.
//   // For example, if we are trying to guess "blondie", it might display "bl_ndi_".
//   rebuildWordView: function() {
//     // We start with an empty string.
//     var wordView = "";
//     // Loop through the letters of the word we are trying to guess..
//     for (var i = 0; i < this.lettersOfTheWord.length; i++) {
//       // If the current letter has been guessed, display that letter.
//       if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) !== -1) {
//         wordView += this.lettersOfTheWord[i];
//       }
//       // If it hasn't been guessed, display a "_" instead.
//       else {
//         wordView += "&nbsp;_&nbsp;";
//       }
//     }
//     // Update the page with the new string we built.
//     document.querySelector("#current-word").innerHTML = wordView;
//   },
//   // Function that "restarts" the game by resetting all of the variables.
//   restartGame: function() {
//     document.querySelector("#guessed-letters").innerHTML = "";
//     this.wordInPlay = null;
//     this.lettersOfTheWord = [];
//     this.matchedLetters = [];
//     this.guessedLetters = [];
//     this.guessesLeft = 0;
//     this.totalGuesses = 0;
//     this.letterGuessed = null;
//     this.setupGame();
//     this.rebuildWordView();
//   },
//   // Function that checks to see if the user has won.
//   updateWins: function() {
//     var win;
//     // this won't work for words with double or triple letters
//     // var lettersOfTheWordClone = this.lettersOfTheWord.slice(); //clones the array
//     // this.matchedLetters.sort().join('') == lettersOfTheWordClone.sort().join('')
//     // If you haven't correctly guessed a letter in the word yet, we set win to false.
//     if (this.matchedLetters.length === 0) {
//       win = false;
//     }
//     // Otherwise, we set win to true.
//     else {
//       win = true;
//     }
//     // If a letter appears in the lettersOfTheWord array, but not in the matchedLetters array, set win to false.
//     // In English, if you haven't yet guessed all the letters in the word, you don't win yet.
//     for (var i = 0; i < this.lettersOfTheWord.length; i++) {
//       if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) === -1) {
//         win = false;
//       }
//     }
//     // If win is true...
//     if (win) {
//       // Increment wins.
//       this.wins = this.wins + 1;
//       // Update wins on the page.
//       document.querySelector("#wins").innerHTML = this.wins;
//       // Update the song title and band on the page.
//       document.querySelector("#music").innerHTML = this.wordsToPick[this.wordInPlay].song +
//       " By " + this.wordInPlay;
//       // Update the image of the band on the page.
//       document.querySelector("#bandDiv").innerHTML =
//         "<img class='band-image' src='images/" +
//         this.wordsToPick[this.wordInPlay].picture + "' alt='" +
//         this.wordsToPick[this.wordInPlay].song + "'>";
//       // Play an audio track of the band.
//       var audio = new Audio(this.wordsToPick[this.wordInPlay].preview);
//       audio.play();
//       // return true, which will trigger the restart of our game in the updatePage function.
//       return true;
//     }
//     // If win is false, return false to the updatePage function. The game goes on!
//     return false;
//   }
// };
// // Initialize the game when the page loads.
// hangmanGame.setupGame();
// // When a key is pressed..
// document.onkeyup = function(event) {
//   // Capture pressed key and make it lowercase.
//   hangmanGame.letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
//   // Pass the guessed letter into our updatePage function to run the game logic.
//   hangmanGame.updatePage(hangmanGame.letterGuessed);
// };