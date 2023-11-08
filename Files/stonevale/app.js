// Simulate the duel between two warriors Rok and Papyra. 
// Each warrior makes a series of moves, and each move has a specific outcome. 
// To win the duel, a warrior must accumulate the highest score over a series of rounds.
// Each warrior can make one of three moves: rock, paper, or scissors.
// A rock win = 1 point
// A paper win = 2 points
// A scissors win = 3 points
// When both warriors choose the same move, it's a draw, and no points are awarded.
// Rock crushes scissors, paper covers rock, and scissors cut paper.
// Points are awarded based on the winning move.
// The duel consists of 5 rounds.
// The goal is to accumulate the highest score over these rounds to win the duel.

//Moves for Rok (Player 1) Round 1: scissors, Round 2: paper, Round 3: scissors,	Round 4: rock,	Round 5: rock,
//Moves for Papyra (Player 2) Round 1: rock, Round 2: rock, Round 3: paper, Round 4: scissors, Round 5: paper,

// Define the winning moves for each possible move
const winningMoves = {
    rock: "scissors", // rock wins against scissors
    paper: "rock", // paper wins against rock
    scissors: "paper" // scissors win against paper
}

// Define the points for each possible move
const points = {
    rock: 1, // rock wins 1 point
    paper: 2, // paper wins 2 points
    scissors: 3 // scissors win 3 points
}

// Define the moves for each player
const rokMoves = ["scissors", "paper", "scissors", "rock", "rock"]; // Rok's moves
const papyraMoves = ["rock", "rock", "paper", "scissors", "paper"]; // Papyra's moves

// Initialize the scores for each player
let rokScore = 0; // Rok's score
let papyraScore = 0; // Papyra's score

// Play the game for as many rounds as there are moves
for (let i = 0; i < rokMoves.length; i++) {
    // Get the current move for each player
    const rokMove = rokMoves[i]; // Rok's current move
    const papyraMove = papyraMoves[i]; // Papyra's current move

    // If both moves are the same, it's a draw
    if (rokMove === papyraMove) {
        console.log(`Round ${i + 1} is a draw!`); // Log the draw
    }
    // If Rok's move wins against Papyra's move, add the points to Rok's score
    else if (winningMoves[rokMove] === papyraMove) {
        rokScore += points[rokMove]; // Add points to Rok's score
        console.log(`Round ${i + 1} goes to Rok!`); // Log Rok's win
    }
    // If Papyra's move wins, add the points to Papyra's score
    else {
        papyraScore += points[papyraMove]; // Add points to Papyra's score
        console.log(`Round ${i + 1} goes to Papyra!`); // Log Papyra's win
    }
}

// Log the final scores
console.log(`Rok's score: ${rokScore}`); // Log Rok's final score
console.log(`Papyra's score: ${papyraScore}`); // Log Papyra's final score

// Determine the winner based on the final scores
if (rokScore > papyraScore) {
    console.log("Rok wins!"); // If Rok has more points, Rok wins
}
else if (papyraScore > rokScore) {
    console.log("Papyra wins!"); // If Papyra has more points, Papyra wins
}
else {
    console.log("It's a draw!"); // If the scores are equal, it's a draw
}