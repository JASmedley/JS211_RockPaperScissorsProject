// to run the function use the command: node main.js
// to close it ctrl + C

//All the stuff necessary for running and testing node
'use strict';
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




// the first function called in the program to get an input from the user
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// the function that will be called by the unit test below
function rockPaperScissors (hand1, hand2) {
  if (hand1 == "rock" && hand2 == "scissors") {
    return console.log("Hand 1 Wins")
  }
  else if (hand1 == "rock" && hand2 == "rock"){
    return console.log("It's a tie!")
  }
  else if (hand1 == "rock" && hand2 == "paper"){
    return console.log("Hand 2 Wins")
  }
  else if (hand1 == "paper" && hand2 == "scissors")  {
    return console.log("Hand 2 Wins")
  }
  else if (hand1 == "paper" && hand2 == "rock") {
    return console.log("Hand 1 Wins")
  }
  else if (hand1 == "paper" && hand2 == "paper") {
    return console.log("It's a tie!")
  }
  else if (hand1 == "scissors" && hand2 == "rock")  {
    return console.log("Hand 2 Wins")
  }
  else if (hand1 == "scissors" && hand2 == "paper") {
    return console.log("Hand 1 Wins")
  }
  else if (hand1 == "scissors" && hand2 == "scissors") {
    return console.log("It's a tie!")
  }

}

getPrompt();
rockPaperScissors ();
