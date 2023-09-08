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

// the function that will be called by the unit test below



function rockPaperScissors (hand1, hand2) {

let handOne1 = hand1.trim().toLowerCase();
let handTwo2 = hand2.trim().toLowerCase();

   if (handOne1 == "rock" && handTwo2 == "rock" ||handOne1 == "paper" && handTwo2 == "paper" ||handOne1 == "scissors" && handTwo2 == "scissors" ){
    return "It's a tie!"
  }
  else if (handOne1 == "rock" && handTwo2 == "paper" ||handOne1 == "paper" && handTwo2 == "scissors" ||handOne1 == "scissors" && handTwo2 == "rock"){
    return "Hand 2 Wins"
  }
   else if (handOne1 == "paper" && handTwo2 == "rock" || handOne1 == "rock" && handTwo2 == "scissors" || handOne1 == "scissors" && handTwo2 == "paper"){
    return "Hand 1 Wins"
  }
}



// the first function called in the program to get an input from the user
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}
getPrompt();