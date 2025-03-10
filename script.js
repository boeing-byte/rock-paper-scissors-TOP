//console.log("Hello world")

/*  RockPaperScissors game

Plan:

1. Computer chooses Rock, paper or scissors randomly
2. User chooses Rock paper or scissors (input?)
3. Compare computer choice vs user choice - decide winner (Paper > Rock > Scissors > Paper)
4. Print result 

5+. Scoring?

*/



let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;


function getComputerChoice (){
    // function to randomly choose R P or S
    choice = Math.random();

    if (choice < 0.33) { return("rock") }

    else if (choice < 0.66) { return("paper") }

    else { return("scissors") }

    return choice;
}



function getHumanChoice () {
    choice = prompt("Choose rock paper or scissors");
    //console.log(`Human Choice: ${choice}`);
    return choice;
}



function playRound (humanChoice, computerChoice) {
    // function that takes the two choices, compares them and prints the result of the round
    console.log(`Human choice: ${humanChoice}`)
    console.log(`Computer choice: ${computerChoice}`)
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice === computerChoice) {
        console.log("It's a tie")
        humanScore += 1;
        computerScore += 1;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("Human Wins")
        humanScore += 1 
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("Human Wins")
        humanScore += 1 
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("Human Wins")
        humanScore += 1 
    } else {
        console.log("Computer Wins")
        computerScore += 1 
    }


}

function playGame(){
    // game function to play 5 rounds
    console.log("Let's play Rock, Paper, Scissors!!")
    for (let i = 1; i <= 5; i++){
        console.log(`ROUND ${i}`)
        playRound(getHumanChoice(), getComputerChoice())
        console.log(`Human score: ${humanScore}`)
        console.log(`Computer score: ${computerScore}`)
    }
    if (humanScore > computerScore) {
        console.log("HUMAN WINS")
    } else if (computerScore > humanScore) {
        console.log("COMPUTER WINS")
    } else {
        console.log("TIE")
    }
}   

playGame()