// level2.js
/* jshint esversion: 11 */
/* globals startingModalForCurrentLevel, gridSize, setUpGrid, startingLights, lightsToBeTurnedOn, updateNumberOfHints, countDownTime, winningInfo */
// Export function to add level 2 detail to the game
export function loadLevel() {
	// Set up starting modal
	const levelInfo = {
		levelPicURL: "https://hanmb17.github.io/C1_MS2_LIGHTSOUT/assets/images/water_lumia.svg",
		levelNo: "2",
		orbPic: "https://hanmb17.github.io/C1_MS2_LIGHTSOUT/assets/images/water_orb.svg",
		element: "Water",
		description: "Alaric has captured the Water Lumina to harness the energy of water! Crack the Alarics puzzle to free the Lumina. To help you crack his tricky puzzle, here is 3 more hints,  but you only have 3 mins to solve it."
	};
	startingModalForCurrentLevel(levelInfo);
	// Set the grid size starting lights for level 2
	gridSize = 4;
	setUpGrid();
	startingLights = [1, 2, 3, 8, 9, 10, 11, 12];
	lightsToBeTurnedOn(startingLights);

	// Add the "water" class to all the lights
	let allLights = document.querySelectorAll(".light");
	allLights.forEach(function(light) {
		light.classList.add("water");
	});

	// Starting number of hints
	let startingHints = 3;
	updateNumberOfHints(startingHints);

	// Set countdown timer in seconds
	countDownTime = 180;
	// Add info for winning modal
	winningInfo = {
		description: "Water Lumia"
	};
}