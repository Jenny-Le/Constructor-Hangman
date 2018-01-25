var inquire = require('inquirer');
var Words = require('./words.js');
var Letters = require('./letters.js');
var Game = require('./game.js');

// var myWords = new Game;
var hangMan = Game.wordlist;

var Hang = {
    guessesLeft: 10,
    guessedLetters: [],
    display: 0,
    currentWord: null
    //empty array to hold the guesses
};

inquire.prompt([{
    name: "player",
    message: "Are you ready?",
    type: "confirm"
}]).then(function (answer) { //promise..read up on it!
    // console.log(answer)//
    if (answer.player) {
        console.log("Ready")
    } else {
        console.log("Go away then!")
    }
})