const WORDS = [
    "enter","apple", "other", "about", "above", "actor", "admit", "after", "again", "agent",
    "angel", "anger", "angle", "apart", "arena", "argue", "arise", "arrow", "asset",
    "audio", "awful", "basic", "beach", "begin", "blame", "blast", "board", "boast",
    "brain", "bread", "break", "brick", "bring", "broad", "build", "burst", "buyer",
    "cabin", "chain", "chair", "charm", "chase", "cheat", "check", "chief", "child",
    "class", "clear", "climb", "close", "cloud", "coast", "count", "court", "cover",
    "crowd", "crush", "dance", "death", "delay", "depth", "diary", "dream", "dress",
    "drink", "drive", "drum", "dwell", "earth", "enemy", "entry", "equal", "essay",
    "event", "every", "exact", "extra", "faith", "favor", "field", "final", "flash",
    "floor", "focus", "force", "frame", "fresh", "fruit", "ghost", "giant", "glory",
    "grace", "grade", "grand", "grant", "grape", "green", "group", "guard", "guess",
    "guest", "guide", "habit", "happy", "heart", "house", "human", "humor", "hurry",
    "ideal", "image", "index", "input", "issue", "ivory", "jelly", "joker", "judge",
    "juice", "knife", "knock", "known", "large", "laugh", "layer", "learn", "lemon",
    "light", "limit", "local", "logic", "lucky", "magic", "maple", "match", "metal",
    "might", "money", "month", "movie", "music", "night", "noble",
    "noise", "novel", "ocean", "olive", "onion", "orbit", "other", "outer", "paint",
    "panel", "paper", "party", "peace", "peach", "pearl", "photo", "piece", "place",
    "plane", "plant", "plate", "point", "power", "pride", "proof", "queen", "quiet",
    "quick", "quite", "radio", "raise", "reach", "ready", "reply", "river", "royal",
    "ruler", "salad", "scale", "scene", "scope", "scout", "screw", "share", "sharp",
    "sheet", "shelf", "shell", "shift", "shine", "shirt", "shock", "shore", "short",
    "shout", "smart", "smile", "smoke", "snake", "solar", "solid", "solve", "space",
    "speed", "sport", "stand", "start", "state", "steam", "steel", "storm", "story",
    "strip", "style", "sugar", "sweet", "sword", "table", "taste", "teach", "thank",
    "theme", "thick", "thing", "tiger", "title", "touch", "tough", "tower", "track",
    "trade", "trail", "train", "trend", "trust", "truth", "uncle", "union", "urban",
    "user", "usual", "valid", "value", "video", "virus", "visit", "voice", "voter",
    "water", "whole", "woman", "world", "worth", "young", "youth", "zebra","slasa"

];

const word = WORDS[Math.floor(Math.random() * WORDS.length)];
const board = document.getElementById("board");
const keyboard = document.getElementById("keyboard");
const restartBtn = document.getElementById("restart-btn");

let currentGuess = "";
let currentRow = 0;
const maxRows = 6;

// Initialize game board
function initBoard() {
    board.innerHTML = "";
    for (let i = 0; i < maxRows * 5; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        board.appendChild(tile);
    }
}

// Initialize keyboard
function initKeyboard() {
    const keys = "qwertyuiopasdfghjklzxcvbnm";
    keyboard.innerHTML = "";

    keys.split("").forEach(key => {
        const keyBtn = document.createElement("button");
        keyBtn.classList.add("key");
        keyBtn.textContent = key;
        keyBtn.addEventListener("click", () => handleKeyPress(key));
        keyboard.appendChild(keyBtn);
    });

    // Add enter and delete buttons
    const enterBtn = document.createElement("button");
    enterBtn.classList.add("key");
    enterBtn.textContent = "Enter";
    enterBtn.addEventListener("click", handleEnter);
    keyboard.appendChild(enterBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("key");
    deleteBtn.textContent = "Del";
    deleteBtn.addEventListener("click", handleDelete);
    keyboard.appendChild(deleteBtn);
}


function handleKeyPress(key) {
    if (currentGuess.length < 5 && key != "Enter" && key != "Backspace" ) {
        currentGuess += key.toLowerCase(); // Ensure lowercase for comparison
        updateBoard();
    } else if (key === "Enter") {
        handleEnter();
    } else if (key === "Backspace") {
        handleDelete();
    }
}

addEventListener("keydown", (event) => handleKeyPress(event.key));

function handleEnter() {
    if (currentGuess.length === 5) {
        checkGuess();
    }
}

function handleDelete() {
    if (currentGuess.length > 0) {
        currentGuess = currentGuess.slice(0, -1);
        updateBoard();
    }
}

// Update the board display
function updateBoard() {
    const tiles = Array.from(board.children).slice(currentRow * 5, currentRow * 5 + 5);
    tiles.forEach((tile, index) => {
        tile.textContent = currentGuess[index] || "";
    });
}

// Check the current guess against the word
function checkGuess() {
    const tiles = Array.from(board.children).slice(currentRow * 5, currentRow * 5 + 5);
    let guess = currentGuess.toLowerCase();

    // Check if the guessed word exists in the WORDS array
    if (!WORDS.includes(guess)) {
        alert("The word does not exist in the list!");
        // Clear the current guess from the input cells
        for (let i = 0; i < 5; i++) {
            tiles[i].textContent = ""; // Clear the text content of each tile
            tiles[i].classList.remove("correct", "present", "absent"); // Remove any previous styling
        }
        currentGuess = "";
        return; // Exit the function early if the word is not valid
    }

    // Check individual letters
    for (let i = 0; i < 5; i++) {
        if (guess[i] === word[i]) {
            tiles[i].classList.add("correct");
        } else if (word.includes(guess[i])) {
            tiles[i].classList.add("present");
        } else {
            tiles[i].classList.add("absent");
        }
    }

    // Check if the guess is correct
    if (guess === word) {
        alert("Congratulations! You've guessed the word!");
        restartGame()

    } else if (currentRow === maxRows - 1) {
        alert(`Game Over! The word was "${word}".`);
    }

    // Reset the current guess and move to the next row
    currentGuess = "";
    currentRow++;
}


// Restart the game
function restartGame() {
    location.reload(); // Reload the page
    currentGuess = "";
    currentRow = 0;
    initBoard();
    initKeyboard();
}

// Initialize game
initBoard();
initKeyboard();

restartBtn.addEventListener("click", restartGame);


