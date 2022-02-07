/*
;==========================================
; Title:  JavaScropt FrameWorks COMP2068
;         Lab One - JavaScript Rock Paper Scissors
; Author: Myles Megaffin
; Date:   1 Jun 2021
;==========================================
*/

// Getting the prompt lib
const ps = require("prompt-sync");
// Declaring propmt
const prompt = ps()

// Importing GameLogic
const gameLogic = 

// Variables 
let userSelection = "";
let computerSelection = 0.00;
let computerSelectionInWords = "";

let game = true;
// -- The Game --

// Keep the game running until we break
while(game){
    
    // Welcoming the user to the game
    console.log("\nWelcome to Rock. Paper. Scissors")
    // Getting the users input here with the prompt command.
    userSelection = prompt("What are you gonna throw? : ")

    // Check if the user has chosen Rock Paper or Scissors 
    switch (userSelection.toLowerCase()){
        case 'rock':
            // Printing out what they have chosen.
            console.log(`User Has Chosen: ${userSelection}`);
            break;
        case 'paper':
            // Printing out what they have chosen.
            console.log(`User Has Chosen: ${userSelection}`);
            break;
        case 'scissors':
            // Printing out what they have chosen.
            console.log(`User Has Chosen: ${userSelection}`);
            break;
        default:
            // Show the user what they have typed in is not a Rock Paper or Scissor
            console.log(`"${userSelection}" is NOT one of the three options`); 
            // Setting the Users unusable anwer to null;
            userSelection = "";      
    }   

    // Get the AI's throw
    // Math.random will give us a random floating number
    computerSelection = Math.random();
    // console.log(computerSelection); // Used for Testing //

    // Turning the AI's throw into a Rock, Paper or Scissors
    //      -We are not using a switch statement because switch statements are used for finding out the exact value
    // This if statement checks if the user throw rock paper or scissors and if so then we run the code
    if(userSelection != ""){
        if(computerSelection <= 0.34){
            console.log("Computer Has Chosen: *ROCK* ");
            computerSelectionInWords = "rock";
        }else if (computerSelection > 0.34 && computerSelection <= 0.67){
            console.log("Computer Has Chosen: *PAPER* ");
            computerSelectionInWords = "paper";
        }else if (computerSelection > 0.67 && computerSelection <= 1){
            console.log("Computer Has Chosen: *SCISSORS* ");
            computerSelectionInWords = "scissors";
        }else{
            // Added this just in case it something happens 
            // Nothing will happen it will only chose a number between 0-1
            // Its more of a joke to anyone reading the code
            console.log("Something went worry while chosening rock, paper, or scissors\nPlease Try Again");
        }
    }

    // Almost Done Now we have to see who won

    // Calculating if the computer won
    if(computerSelectionInWords.toLowerCase() == "rock" && userSelection.toLowerCase() == "scissors"){
        console.log(`\tThe Computer Won \n\tRock Beats ${userSelection}`);
    }
    else if(computerSelectionInWords.toLowerCase() == "paper" && userSelection.toLowerCase() == "rock"){
        console.log(`\tThe Computer Won \n\tPaper Beats ${userSelection}`);
    }
    else if(computerSelectionInWords.toLowerCase() == "scissors" && userSelection.toLowerCase() == "paper"){
        console.log(`\tThe Computer Won \n\tScissors Beats ${userSelection}`);
    }
    // Calculating if the User Wins
    else if(userSelection.toLowerCase() == "rock" && computerSelectionInWords.toLowerCase() == "scissors"){
        console.log(`\tYou Won \n\t${userSelection} Beats Scissors`);
    }
    else if(userSelection.toLowerCase() == "paper" && computerSelectionInWords.toLowerCase() == "rock"){
        console.log(`\tYou Won \n\t${userSelection} Beats Rock`);
    }
    else if(userSelection.toLowerCase() == "scissors" && computerSelectionInWords.toLowerCase() == "paper"){
        console.log(`\tYou Won \n\t${userSelection} Beats Paper`);
    }
    // Calculating if there is a tie
    else if(userSelection.toLowerCase() == "rock" && computerSelectionInWords.toLowerCase() == "rock"){
        console.log("\tTie Both of You Throw Rock");
    }
    else if(userSelection.toLowerCase() == "paper" && computerSelectionInWords.toLowerCase() == "paper"){
        console.log("\tTie Both of You Throw Paper");
    }
    else if(userSelection.toLowerCase() == "scissors" && computerSelectionInWords.toLowerCase() == "scissors"){
        console.log("\tTie Both of You Throw Scissors");
    }
    else{
        // If the user didnt throw correctly then we dont return/log anything 
    }

    //checking to see if the player wants to play again
    if(prompt("play again? y/n ") == 'n'){
        game = false;
    }

}
/*
====== Thoughts on Assignment ======

The assignment was fun and easy alot made me think of start thinking how to program again. it felt kinda basic tho and i believe this is all review 
i hope the projects and assignments get to be more into depth into js and node. i would like to make my own website by the end of the course.


====== What I struggled with ======

just getting back into programming so it was kinda hard remembering what the default in the switch statement did
trying to figure out how to use the math.random in a effective and lazy/easy way
(havent done the gethub upload so that might be hard)
trying to put null for the userSelection and ripping me up so i just left it = ""


====== If I had todo this Again ======

- i would have the "calculating a winner" part alittle less hard coded if i could
- i would make a main menu
- i would have a scoreboard and have a it in the menu to see how many time you have beaten the computer
- maybe have it so the scoreboard would get saved in a file so that when you stop the game you wouldnt lose all the data
- have an alert pop up and show you who won or lost the the end
- make it more the project Object Oriented (OOP)
    this would be easy just acouple of functions and then calling them in the while loop of the game
- have a timer and count down from 3 and it shows you the computers throw beside yours so you


====== What did I learn / will remember from this Assignment ======

What I Learned
- a switch statement is used for finding out the exact value
- how to install a npm via terminal
- how to import the a lib/npm into code
- JS syntax

What I Will Remember
- how to install a npm via terminal

*/