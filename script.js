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

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const round = document.querySelector(".round");
const userScore = document.querySelector(".user-score");
const compScore = document.querySelector(".comp-score");
const roundText = document.querySelector(".round-text");
const resultText = document.querySelector(".result-text")




let button = document.querySelectorAll("button")
button.forEach((btn) => btn.addEventListener("click", () => {

    if (humanScore == 5 && computerScore == 5 ) {
        alert("IT'S A TIE!");
        } else if (computerScore == 5) {
            alert("COMPUTER WINS");
        } else if (humanScore == 5){
            alert("HUMAN WINS")
        }

    let humanChoice = btn.className;
    console.log(humanChoice)

    playRound(humanChoice, getComputerChoice())

})
)


function getComputerChoice (){
    // function to randomly choose R P or S
    choice = Math.random();

    if (choice < 0.33) { return("rock") }

    else if (choice < 0.66) { return("paper") }

    else { return("scissors") }

    return choice;
}




function playRound (humanChoice, computerChoice) {
    // function that takes the two choices, compares them and prints the result of the round

    compScore.style.backgroundColor = "white";
    userScore.style.backgroundColor = "white";
    roundText.textContent = `${humanChoice.toUpperCase()} v ${computerChoice.toUpperCase()}`;
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice === computerChoice) {
        resultText.textContent = "It's a tie";
        humanScore += 1;
        computerScore += 1;
        compScore.style.backgroundColor = "LightGreen";
        userScore.style.backgroundColor = "LightGreen";
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        resultText.textContent = "Human Wins";
        humanScore += 1 
        userScore.style.backgroundColor = "LightGreen";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        resultText.textContent = "Human Wins"
        humanScore += 1 
        userScore.style.backgroundColor = "LightGreen";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        resultText.textContent = "Human Wins"
        humanScore += 1 
        userScore.style.backgroundColor = "LightGreen";
    } else {
        resultText.textContent = "Computer Wins"
        computerScore += 1 
        compScore.style.backgroundColor = "LightGreen";
    }
    roundNumber += 1;

    console.log(roundNumber)
    round.textContent = `Round: ${roundNumber}`;
    userScore.textContent = `User: ${humanScore}`;
    compScore.textContent = `Comp: ${computerScore}`;
    console.log(`${humanScore} : ${computerScore}`);

    }


// function playGame(){
//     // game function to play 5 rounds
//     console.log("Let's play Rock, Paper, Scissors!!")
//     for (let i = 1; i <= 5; i++){
//         console.log(`ROUND ${i}`)
//         playRound(getHumanChoice(), getComputerChoice())
//         console.log(`Human score: ${humanScore}`)
//         console.log(`Computer score: ${computerScore}`)
//     }
//     if (humanScore > computerScore) {
//         console.log("HUMAN WINS")
//     } else if (computerScore > humanScore) {
//         console.log("COMPUTER WINS")
//     } else {
//         console.log("TIE")
//     }
// }   




//playGame()