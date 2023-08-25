/*
Lights Out Game Script
This script handles the functionality of the Lights Out game, where players need to turn off all the lights on the grid.
*/

/* jshint esversion: 11 */
/* exported startingModalForCurrentLevel */
/* globals bootstrap */

// Common game varaibles
// Game Set up varaibles
let gridSize = 3;
let gameMode;
let countDownTime = 0;
let totalHints;

// Game State Variables
let moveCount = 0;
let startingLights;
let clickedLights = [];
let timerStartTime;
let countDown;
let availableHints = 0;
let isModalShowing = false;

// Bootstrap Modal
let myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"));

// Level Mode Variables
const maxLevel = 4;
let currentLevel = 1;
let loadedLevels = [];
let winningInfo;

// Modal Elements
const staticBackdropModal = document.getElementById("staticBackdrop");
const instructionsModal = document.getElementById("instructionsModal");
const freeplaySetUpModal = document.getElementById("freeplaySetUpModal");

// Buttons
const hintButton = document.getElementById("hint-button");

// Game Grid Element
const gameGridElement = document.getElementById("game-grid");
// Timer Element
const countdownElement = document.getElementById("timer");

// Wait for the DOM content to be fully loaded before executing JavaScript code
document.addEventListener("DOMContentLoaded", function() {

	// Launch the game
	setUpGame();

	// Add event listener to for when level mode modal closes to start timer / reset teh game or go to the home page
	staticBackdropModal.addEventListener("hidden.bs.modal", async function() {
		let button = staticBackdropModal.querySelector(".btn-primary");
		let buttonText = button.textContent;

		if (buttonText.includes("Next Level ")) {
			await new Promise((resolve) => setTimeout(resolve, 200));
			myModal.hide();
			initLightsOutGame();
		} else if (buttonText.includes("Home")) {
			window.location.href = "index.html";
		} else if (buttonText.includes("Replay Level")) {
			resetGame();
		} else {
			startCountdownTimer();
		}
	});

	// Add an event listener to respond to button clicks on the game page targeting the lights
	document.addEventListener("click", function(event) {
		let target = event.target;
		if (target.classList.contains("light")) {
			toggleLights(target);
			let lightNumber = parseInt(target.getAttribute("id"));
			clickedLights.push(lightNumber);
			if (target.classList.contains("flashing")) {
				stopFlashing(target);
			}
			moveCount++;
			document.getElementById("move-counter").textContent = moveCount;
			checkWin();
		}
	});

	// Add event listener to customhints radio to handle button state change
	document.getElementById("customHintsRadio").addEventListener("click", handleHintRadioButtonChange);

	// Add event listener to the modal before it hides
	freeplaySetUpModal.addEventListener("hide.bs.modal", function(event) {
		const isValid = validateInput();
		if (!isValid) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			availableHints = 0;
			freeplaySetUp();
		}
	});

	// event lsitener to check custom hint input as it's inpuuted
	document.getElementById("hintsRequested").addEventListener("input", function() {
		let value = parseInt(this.value);
		if (isNaN(value) || value < 1 || value > 99) {
			this.classList.add("invalid-input");
		} else {
			this.classList.remove("invalid-input");
		}
	});

	// Add event listener to expand game menu
	document.getElementById("menu-button")
		.addEventListener("click", function() {
			this.classList.toggle("expanded");
			document.getElementById("toggle-menu").classList.toggle("expanded");
			if (this.classList.contains("expanded")) {
				if (!isModalShowing) {
					pauseCountdownTimer();
				}
			} else {
				if (!isModalShowing) {
					resumeCountdownTimer();
				}
			}
		});

	// Add event listener to the home button
	document.getElementById("home-button").addEventListener("click", () => {
		window.location.href = "index.html";
	});

	// Add event listener for when the instructions modal is displayed
	instructionsModal.addEventListener("show.bs.modal", function() {
		isModalShowing = true;
		pauseCountdownTimer();
	});

	// Add event listener for when the instructions modal is hidden
	instructionsModal.addEventListener("hidden.bs.modal", function() {
		isModalShowing = false;
		resumeCountdownTimer();
	});

	// Add event listener to the restart button
	document.getElementById("reset-button").addEventListener("click", resetGame);
	// Add event listener to the hint button
	hintButton.addEventListener("click", function() {
		if (!this.classList.contains("deactivated-button")) {
			if (availableHints > 0 || availableHints === "infinite") {
				if (availableHints !== "infinite") {
					// Decrement the available hints count
					availableHints--;
					document.getElementById("hints-count").textContent = availableHints;
				}
				let currentSolution = solution();
				// Check if the currentSolution is not empty
				if (currentSolution.length > 0) {
					// Randomly select a number from the currentSolution
					let randomIndex = Math.floor(Math.random() * currentSolution.length);
					let selectedNumber = currentSolution[randomIndex];
					let light = document.getElementById(selectedNumber.toString());
					// Add the flashing class to the selected light
					light.classList.add("flashing");
					// Disable the hint button to prevent the user cicking it again
					hintButton.classList.add("deactivated-button");
				}
			}
		}
	});
});

// Game Setup Functions
async function setUpGame() {
	gameMode = await setGameMode();
	initLightsOutGame();
}
// Function to set game mode
function setGameMode() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	gameMode = urlParams.get("mode");
	if (!gameMode) {
		gameMode = "freeplay";
	}
	return gameMode;
}
// Function to initialise which game maode is being played
function initLightsOutGame() {
	moveCount = 0;
	document.getElementById("move-counter")
		.textContent = moveCount;
	if (gameMode === "play") {
		if (currentLevel <= maxLevel) {
			loadCurrentLevel(currentLevel);
		} else {
			finalModal();
		}
	} else {
        // Update the level number on game page
	    const levelNumberElement = document.querySelector(".level-number");
	    levelNumberElement.textContent = "Freeplay Mode";
		let freePlayModal = new bootstrap.Modal(freeplaySetUpModal);
		freePlayModal.show();
	}
}

// Set up the game grid dynmaically, based of the gridsize variable.
function setUpGrid() {
	let gameGridHtml = '';
	for (let i = 0; i < gridSize; i++) {
		gameGridHtml += '<div class="row p-0">';
		for (let j = 0; j < gridSize; j++) {
			let lightNumber = i * gridSize + j + 1;
			gameGridHtml += '<div class="light col" id="' + lightNumber + '"></div>';
		}
		gameGridHtml += '</div>';
	}

	gameGridElement.innerHTML = gameGridHtml;
	if (gameMode === "freeplay") {
		randomStart();
		startTimer();
	}
}

// Turns the lights on that need to be pressed at the start
function lightsToBeTurnedOn(LightsToTurnOn) {
	// Loop through the startingLights and press the buttons one by one
	LightsToTurnOn.forEach(function(lightNumber) {
		let onLight = document.getElementById(lightNumber.toString());
		toggleLights(onLight);
	});
	clickedLights = [];
}

// Level play functions
// Function to import the level js script 
async function loadCurrentLevel(levelIndex) {
	let levelScript = `level${levelIndex}.js`;
	if (loadedLevels.includes(levelScript)) {
		const module = await import(`./${levelScript}`);
		if (typeof module.loadLevel === "function") {
			module.loadLevel();
		}
	} else {
		try {
			const module = await import(`./${levelScript}`);
			if (typeof module.loadLevel === "function") {
				module.loadLevel();
			}
			loadedLevels.push(levelScript);
		} catch (error) {
			console.error("Error loading level script:", error);
		}
	}
}

// Freeplay functions 
// Function to set up the Freeplay game
function freeplaySetUp() {
	gridSize = parseInt(document.querySelector('input[name="gridSize"]:checked').value);
	let selectedValue = document.querySelector('input[name="hintOption"]:checked').value;
	freeplayHintsSetUp(selectedValue);
	setUpGrid();
}

/* Randomly creates a starting pattern for the game
Always ensures the number are lights turned toggled is greater than the gridsize */
function randomStart() {
	let totalLights = Math.pow(gridSize, 2);
	let numLightsToPress = Math.floor(Math.random() * (totalLights - gridSize + 1)) + gridSize;
	let uniqueNumbersSet = new Set();
	while (uniqueNumbersSet.size < gridSize) {
		let randomNumber = Math.floor(Math.random() * totalLights) + 1;
		uniqueNumbersSet.add(randomNumber);
	}
	startingLights = Array.from(uniqueNumbersSet);
	let remainingCount = numLightsToPress - gridSize;
	for (let i = 0; i < remainingCount; i++) {
		let randomNumber = Math.floor(Math.random() * totalLights) + 1;
		startingLights.push(randomNumber);
	}
	lightsToBeTurnedOn(startingLights);
}

// User interaction functions
// function to turn the lights on and off
function toggleLights(light) {
	light.classList.toggle("on");
	// Get the light number from the id attribute
	const lightNumber = parseInt(light.getAttribute("id"));
	// Get the row and column of the clicked light
	let row = Math.floor((lightNumber - 1) / gridSize);
	let column = (lightNumber - 1) % gridSize;
	// Toggle adjacent lights
	toggleAdjacentLight(row, column - 1); // Left
	toggleAdjacentLight(row, column + 1); // Right
	toggleAdjacentLight(row - 1, column); // Up
	toggleAdjacentLight(row + 1, column); // Down
}
//Toggle the adjacent lights to the one pressed on and off
function toggleAdjacentLight(row, column) {
	// Check if the specified row and column are within the bounds of the game grid
	if (row >= 0 && row < gridSize && column >= 0 && column < gridSize) {
		let adjacentLight = document.getElementById((row * gridSize + column + 1).toString());
		// Toggle the adjacent light
		adjacentLight.classList.toggle("on");
	}
}

// Function to stop the flashing effect when the light is clicked
function stopFlashing(light) {
	light.classList.remove("flashing");
	if (availableHints > 0 || availableHints === "infinite") {
		hintButton.classList.remove("deactivated-button");
	}
}

// Win and Reset Logic
// See if all lights are off to see if there is a win?
function checkWin() {
	// count how many on classes are presents if 0 = win
	if (document.querySelectorAll(".on").length === 0) {
		if (gameMode === "play") {
			timeSolvedIn();
			currentLevel++;
			if (currentLevel >= 6) {
				alert("Congratulations! You completed all the levels!");
			} else {
				winningModal(winningInfo);
			}
		} else {
			pauseCountdownTimer();
			freeplayWinModal();
			countDownTime = 0;
			moveCount = 0;
			document.getElementById("move-counter").textContent = moveCount;
		}
	}
}

// Modal functions
// Starting level Modal - level play 
function startingModalForCurrentLevel(levelInfo) {
	// Update the level number on game page
	const levelNumberElement = document.querySelector(".level-number");
	levelNumberElement.textContent = `Level ${levelInfo.levelNo}`;
	// populate the level modal and load/
	let modalBody = staticBackdropModal.querySelector(".modal-body");
	modalBody.querySelector("#levelPic").src = levelInfo.levelPicURL;
	modalBody.querySelector("#levelNo").textContent = levelInfo.levelNo;
	modalBody.querySelector('#orbPic').src = levelInfo.orbPic;
	modalBody.querySelector('#orbElement').textContent = levelInfo.element;
	modalBody.querySelector('#levelDescription').textContent = levelInfo.description;
	modalBody.querySelector("#buttonLabel").textContent = "Play ";
	modalBody.querySelectorAll('.winning').forEach(element => element.classList.add('d-none'));
	myModal.show();


}
// Update modal for winning message - level play
function winningModal(winningInfo) {
	const modalBody = staticBackdropModal.querySelector(".modal-body");
	modalBody.querySelectorAll(".winning").forEach(element => element.classList.remove("d-none"));
	modalBody.querySelector("#buttonLabel").textContent = "Next Level ";
	modalBody.querySelector("#levelDescription").textContent = `You freed the ${winningInfo.description} in ${moveCount} moves and ${winningInfo.time}.`;
	modalBody.querySelectorAll(".failed").forEach((element) => element.classList.add("d-none"));
	myModal.show();
}

function failedModal() {
	const modalBody = staticBackdropModal.querySelector(".modal-body");
	modalBody.querySelectorAll(".failed").forEach((element) => element.classList.remove("d-none"));
	modalBody.querySelector("#buttonLabel").textContent = "Replay Level ";
	myModal.show();
}

// Update modal for final message when all levels passed - level play
function finalModal() {
	const modalBody = staticBackdropModal.querySelector(".modal-body");
	modalBody.querySelector("#levelPic").src = "assets/images/all_lumia.svg";
	modalBody.querySelector("#winningMessage").textContent = "Congratulations, You freed all the Lumia";
	modalBody.querySelector("#winningMessage").classList.remove("d-none");
	modalBody.querySelectorAll(".finalMessage").forEach((element) => element.classList.add("d-none"));
	modalBody.querySelector("#infoModal").classList.add(
		"mt-4",
		"m-lg-0",
		"d-flex",
		"flex-column",
		"align-items-center",
		"align-lg-end");
	modalBody.querySelector("#buttonLabel").textContent = "Home";
	myModal.show();
}

// Update freeplay modal for winning message
function freeplayWinModal() {
	const modalBody = freeplaySetUpModal.querySelector(".modal-body");
	modalBody.querySelector("#freeplayTime").textContent = timeCompleted(countDownTime);
	modalBody.querySelector("#freeplayMoves").textContent = moveCount;
	modalBody.querySelectorAll(".win").forEach((element) => element.classList.remove("d-none"));
	// setTimeout(() => {
	const myFreeplayModal = new bootstrap.Modal(document.getElementById("freeplaySetUpModal"));
	myFreeplayModal.show();
	//  }, 200);
}

function handleHintRadioButtonChange() {
	let radio = document.getElementById("customHintsRadio");
	const numberInput = document.getElementById("hintsRequested");
	const numberInputLabel = document.getElementById("hintsRequestedLabel");

	if (radio.checked) {
		numberInput.classList.remove("d-none");
		numberInputLabel.classList.remove("d-none");
		validateInput();
	} else {
		numberInput.classList.add("d-none");
		numberInputLabel.classList.add("d-none");

	}

	// Attach click event listeners to other radio buttons as well
	let otherRadios = document.querySelectorAll('[name="hintOption"]:not(#customHintsRadio):not(#hintsRequested)');
	otherRadios.forEach(function(otherRadio) {
		otherRadio.addEventListener("click", function() {
			numberInput.classList.add("d-none");
			numberInputLabel.classList.add("d-none");
		});
	});
}

function validateInput() {
	let hintsRequestedInput = document.getElementById("hintsRequested");
	let value = parseInt(hintsRequestedInput.value);

	if (isNaN(value) || value < 1 || value > 99) {
		hintsRequestedInput.classList.add("invalid-input");
		return false;
	} else {
		return true;
	}
}

// Timers
// Create countdown timer
function startCountdownTimer() {
	timerStartTime = countDownTime;
	if (countDown) {
		clearInterval(countDown);
	}
	// Display the initial countdown value
	displayTime(countDownTime);
	// Start the countdown using setInterval
	countDown = setInterval(() => {
		// Decrease the remaining time by 1 second
		countDownTime--;
		// Update the countdown displayTime with the updated time
		displayTime(countDownTime);
		// Check if the countdown has reached 0 or below
		if (countDownTime <= 0) {
			endCount();
		}
	}, 1000);
	displayTime(countDownTime);

	function endCount() {
		failedModal();
		countdownElement.innerHTML = "Time out";
	}
}

// Create countdown timer
function startTimer() {
	if (countDown) {
		clearInterval(countDown);
	}
	displayTime(countDownTime);
	countDown = setInterval(() => {
		countDownTime++;
		displayTime(countDownTime);
	}, 1000);
	displayTime(countDownTime);
}

// creates a string to display time in MM:SS
function displayTime(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;
	countdownElement.innerHTML = `${minutes < 10 ? "0" : ""}${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;

}

// Function to pause the timer
function pauseCountdownTimer() {
	clearInterval(countDown);
}

// Function to resume the countdown timer
function resumeCountdownTimer() {
	if (gameMode === "play") {
		startCountdownTimer();
	} else {
		startTimer();
	}
}

// Function to format time in minutes seconds format
function formatTime(seconds) {
	if (seconds >= 60) {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes} minutes ${remainingSeconds} seconds`;
	} else {
		return `${seconds} seconds`;
	}
}

// Work out the winning time information - level play
function timeSolvedIn() {
	clearInterval(countDown);
	const elaspedTime = timerStartTime - countDownTime;
	const winningTime = formatTime(elaspedTime);
	winningInfo.time = winningTime;
}

// Set the display for the time the puzzle was solved in - free play
function timeCompleted(seconds) {
	return formatTime(seconds);
}

// Hint functions
// Finds solution for current pattern on the game grid 
function solution() {
	let allLightsPressed = startingLights.concat(clickedLights);
	const count = {};
	// Loop through the allLightsPressed array
	allLightsPressed.forEach(function(number) {
		// If the number is already a key in the count object, increment its count
		if (count[number]) {
			count[number]++;
		} else {
			// If the number is not a key in the count object, initialise its count to 1
			count[number] = 1;
		}
	});
	const solution = [];
	// Loop through the allLightsPressed array again to find numbers with odd counts
	allLightsPressed.forEach(function(number) {
		// Check if the count of the number is odd
		if (count[number] % 2 === 1) {
			if (!solution.includes(number)) {
				// Add the number to the solution array if it's odd and not already included
				solution.push(number);
			}
		}
	});
	return (solution);

}

function freeplayHintsSetUp(hintOption) {
	if (hintOption === "custom") {
		// Use the custom hint value if provided, otherwise default to 0
		const customHintValue = parseInt(document.getElementById("hintsRequested").value) || 0;
		updateNumberOfHints(customHintValue);
	} else {
		// Use the selected hint option directly (Infinity or 0)
		updateNumberOfHints(hintOption);
	}
}

// Function to update the number of hints the user has left
function updateNumberOfHints(startingHints) {
	if (startingHints === "infinite") {
		document.getElementById("hints-count").innerHTML = `<i class="fas fa-infinity"></i>`;
		availableHints = startingHints;
		totalHints = startingHints;
	} else if (startingHints === "none") {
		hintButton.classList.add("deactivated-button");
		totalHints = startingHints;
	} else {
		totalHints = startingHints + availableHints;
		availableHints = totalHints;
		document.getElementById("hints-count").textContent = availableHints;
		hintButton.classList.remove("deactivated-button");
	}
}

// reset game function
function resetGame() {
	var allLights = document.querySelectorAll(".light");
	allLights.forEach(function(light) {
		light.classList.remove("on");
		stopFlashing(light); // Pass the light element to stopFlashing()
	});
	// Reset move counter
	moveCount = 0;
	document.getElementById("move-counter").textContent = moveCount;
	// Use startingArray to reset the lights to their initial pattern
	lightsToBeTurnedOn(startingLights);
	// Reset clicked buttons
	clickedLights = [];
	resetCountDownTimer();
	resetHints();

}

function resetHints() {
	if (totalHints !== "none" && totalHints !== "infinite") {
		availableHints = totalHints;
		document.getElementById("hints-count").textContent = availableHints;
		hintButton.classList.remove("deactivated-button");
	}

}

// reset the timer
function resetCountDownTimer() {
	if (gameMode === "play") {
		countDownTime = timerStartTime;
		startCountdownTimer();
	} else {
		countDownTime = 0;
		startTimer();
	}
}