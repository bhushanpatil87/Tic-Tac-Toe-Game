let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".rest-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let player0Score = 0;
let playerXScore = 0;
let tieScore = 0;
let turn0 = true; // Start with player 0

// Prompt to get player names
let player0Name = prompt("Enter name for Player 0:", "Player 0");
let playerXName = prompt("Enter name for Player X:", "Player X");

// Display the player names on the scoreboard
document.querySelector("#player0-name").innerText = `${player0Name}: 0`;
document.querySelector("#playerX-name").innerText = `${playerXName}: 0`;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// Function to reset the game board and turn
const resetGame = () => {
    turn0 = true; // Reset to start with Player 0
    enableBoxes();
    msgContainer.classList.add("hide");
};

// Add click events to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "0"; // Player 0
            turn0 = false; // Switch to Player X for the next turn
        } else {
            box.innerText = "X"; // Player X
            turn0 = true; // Switch back to Player 0
        }
        box.disabled = true; // Disable the clicked box

        checkWinner(); // Check for a winner or tie after each move
    });
});

// Disable all boxes
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

// Enable and clear all boxes
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""; // Clear the text inside each box
    }
};

// Show the winner
const showWinner = (winner) => {
    if (winner === "0") {
        msg.innerText = `Congratulations, ${player0Name} wins!`;
        player0Score++;
        document.querySelector("#player0-name").innerText = `${player0Name}: ${player0Score}`;
    } else {
        msg.innerText = `Congratulations, ${playerXName} wins!`;
        playerXScore++;
        document.querySelector("#playerX-name").innerText = `${playerXName}: ${playerXScore}`;
    }
    msgContainer.classList.remove("hide");
    disableBoxes();
};

// Show tie
const showTie = () => {
    msg.innerText = "It's a Tie!";
    tieScore++;
    document.querySelector("#ties").innerText = `Ties: ${tieScore}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

// Check for a winner or tie
const checkWinner = () => {
    let allFilled = true;
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return;
            }
        }
    }

    // Check if all boxes are filled
    boxes.forEach((box) => {
        if (box.innerText === "") {
            allFilled = false;
        }
    });

    // If all boxes are filled and no winner, declare a tie
    if (allFilled) {
        showTie();
    }
};

// Reset scores and game
const resetScores = () => {
    player0Score = 0;
    playerXScore = 0;
    tieScore = 0;
    document.querySelector("#player0-name").innerText = `${player0Name}: 0`;
    document.querySelector("#playerX-name").innerText = `${playerXName}: 0`;
    document.querySelector("#ties").innerText = `Ties: 0`;
    resetGame(); // Also reset the game board
};

// Event listeners for buttons
newGameBtn.addEventListener("click", resetGame); // Resets only the game board and starts with Player 0
resetBtn.addEventListener("click", resetScores); // Resets the scores and the game board
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".rest-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let player0Score = 0;
let playerXScore = 0;
let tieScore = 0;
let turn0 = true; // Start with player 0

// Prompt to get player names
let player0Name = prompt("Enter name for Player 0:", "Player 0");
let playerXName = prompt("Enter name for Player X:", "Player X");

// Display the player names on the scoreboard
document.querySelector("#player0-name").innerText = `${player0Name}: 0`;
document.querySelector("#playerX-name").innerText = `${playerXName}: 0`;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// Function to reset the game board and turn
const resetGame = () => {
    turn0 = true; // Reset to start with Player 0
    enableBoxes();
    msgContainer.classList.add("hide");
};

// Add click events to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "0"; // Player 0
            turn0 = false; // Switch to Player X for the next turn
        } else {
            box.innerText = "X"; // Player X
            turn0 = true; // Switch back to Player 0
        }
        box.disabled = true; // Disable the clicked box

        checkWinner(); // Check for a winner or tie after each move
    });
});

// Disable all boxes
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

// Enable and clear all boxes
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""; // Clear the text inside each box
    }
};

// Show the winner
const showWinner = (winner) => {
    if (winner === "0") {
        msg.innerText = `Congratulations, ${player0Name} wins!`;
        player0Score++;
        document.querySelector("#player0-name").innerText = `${player0Name}: ${player0Score}`;
    } else {
        msg.innerText = `Congratulations, ${playerXName} wins!`;
        playerXScore++;
        document.querySelector("#playerX-name").innerText = `${playerXName}: ${playerXScore}`;
    }
    msgContainer.classList.remove("hide");
    disableBoxes();
};

// Show tie
const showTie = () => {
    msg.innerText = "It's a Tie!";
    tieScore++;
    document.querySelector("#ties").innerText = `Ties: ${tieScore}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

// Check for a winner or tie
const checkWinner = () => {
    let allFilled = true;
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return;
            }
        }
    }

    // Check if all boxes are filled
    boxes.forEach((box) => {
        if (box.innerText === "") {
            allFilled = false;
        }
    });

    // If all boxes are filled and no winner, declare a tie
    if (allFilled) {
        showTie();
    }
};

// Reset scores and game
const resetScores = () => {
    player0Score = 0;
    playerXScore = 0;
    tieScore = 0;
    document.querySelector("#player0-name").innerText = `${player0Name}: 0`;
    document.querySelector("#playerX-name").innerText = `${playerXName}: 0`;
    document.querySelector("#ties").innerText = `Ties: 0`;
    resetGame(); // Also reset the game board
};

// Event listeners for buttons
newGameBtn.addEventListener("click", resetGame); // Resets only the game board and starts with Player 0
resetBtn.addEventListener("click", resetScores); // Resets the scores and the game board

