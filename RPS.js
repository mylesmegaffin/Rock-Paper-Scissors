/*
;==========================================
; Title: JavaScript Rock Paper Scissors
; Author: Myles Megaffin
; Date:   1 Jun 2021
; Edit Date: 7 Feb 2022
;==========================================
*/

// Getting the prompt lib
const ps = require("prompt-sync");
// Declaring propmt
const prompt = ps()

// -- The Game --
// Welcoming the user to the game
console.log("\nWelcome to Rock. Paper. Scissors")
game();
// -- End --

function game() {
    // Variables 
    let game = true;
    let score = 0;

    // Keep the game running until we break
    while (game) {
        // Setting the players choice in a value
        player = playerChoice()
        computer = computerChoice()

        // Check who won and add it to the score
        score = score + calculateWinner(computer, player)
        console.log(score)

        // Asking what if they want to continue to play and setting the answer to the game state
        game = continueToPlay()
    }
}

function continueToPlay() {
    //checking to see if the player wants to play again
    if (prompt("play again? y/n ") == 'n') {
        return false;
    } else {
        return true
    }
}

function playerChoice() {
    // Getting the users input here with the prompt command. Then converting it to lowercase 
    userSelection = prompt("What are you gonna throw? : ").toLowerCase()

    // Check if the user has chosen Rock Paper or Scissors 
    switch (userSelection) {
        case 'rock':
            // Printing out what they have chosen.
            console.log(`User Has Chosen: ${userSelection}`);
            return "rock"
        case 'paper':
            // Printing out what they have chosen.
            console.log(`User Has Chosen: ${userSelection}`);
            return "paper"
        case 'scissors':
            // Printing out what they have chosen.
            console.log(`User Has Chosen: ${userSelection}`);
            return "scissors"
        default:
            // Show the user what they have typed in is not a Rock, Paper, or Scissor
            console.log(`"${userSelection}" is NOT one of the three options`);
    }
}

function computerChoice() {
    let computerSelection = 0.00;
    // Get the AI's choice
    // Math.random will give us a random floating number
    computerSelection = Math.random();
    // console.log(computerSelection); // Used for Testing //

    // Turning the AI's throw into a Rock, Paper or Scissors
    // Check if the computer throw rock paper or scissors and if so then we run the code
    if (computerSelection <= 0.34) {
        console.log("Computer Has Chosen: *ROCK* ");
        return "rock";
    }
    else if (computerSelection <= 0.67) {
        console.log("Computer Has Chosen: *PAPER* ");
        return "paper";
    }
    else {
        console.log("Computer Has Chosen: *SCISSORS* ");
        return "scissors";
    }
}

function calculateWinner(computerChoice, userSelection) {
    // Calculate who won and then return the score
    // Calculating if the Computer Won
    if (computerChoice == "rock" && userSelection == "scissors") {
        console.log(`\tThe Computer Won \n\tRock Beats ${userSelection}`);
        return -1
    }
    else if (computerChoice == "paper" && userSelection == "rock") {
        console.log(`\tThe Computer Won \n\tPaper Beats ${userSelection}`);
        return -1
    }
    else if (computerChoice == "scissors" && userSelection == "paper") {
        console.log(`\tThe Computer Won \n\tScissors Beats ${userSelection}`);
        return -1
    }
    // Calculating if the User Won
    else if (userSelection == "rock" && computerChoice == "scissors") {
        console.log(`\tYou Won \n\t${userSelection} Beats Scissors`);
        return 1
    }
    else if (userSelection == "paper" && computerChoice == "rock") {
        console.log(`\tYou Won \n\t${userSelection} Beats Rock`);
        return 1
    }
    else if (userSelection == "scissors" && computerChoice == "paper") {
        console.log(`\tYou Won \n\t${userSelection} Beats Paper`);
        return 1
    }
    // Calculating if there is a tie
    else if (userSelection == "rock" && computerChoice == "rock") {
        console.log("\tTie Both of You Throw Rock");
        return 0
    }
    else if (userSelection == "paper" && computerChoice == "paper") {
        console.log("\tTie Both of You Throw Paper");
        return 0
    }
    else if (userSelection == "scissors" && computerChoice == "scissors") {
        console.log("\tTie Both of You Throw Scissors");
        return 0
    }
    else {
        // If the user didnt throw correctly then we dont return/log anything
        console.log("something went wrong") 
    }

}
/*
====== UPDATED* ======
====== Thoughts on the Project ======

This project was fun and really cool to revisit it. I had a lot of fun refactoring it. 


====== What I struggled with ======

I struggled looking reading the code when i first came back to the project. I was a awhile since i looked at the code so my comments helped me 
identify what was going on. While refactoring i would break parts of the code and I would get stuck trying to figure out why it broke.


====== If I had todo this Again ======

- make a ui instead of running it in the console
- i would make a main menu
- maybe have it so the scoreboard would get saved in a file so that when you stop the game you wouldnt lose all the data
- have a timer and count down from 3 and it shows you the computers throw beside yours so you


====== What did I learn / will remember from this Assignment ======

What I Learned
- refactoring code is hard if the code is hard to follow
- making the code easier to follow is better than having the code look cool
- making try to make your code where it comments its self (it doesnt need comments to understand whats going on)

What I Will Remember
- to make my code cleaner and easier to follow for other people to read

*/