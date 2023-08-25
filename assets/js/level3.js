// level3.js
// Export function to add level 3 detail to the game
export function loadLevel() {
	const levelInfo = {
		levelPicURL: "https://hanmb17.github.io/C1_MS2_LIGHTSOUT/assets/images/earth_lumia.svg",
		levelNo: "3",
		orbPic: "https://hanmb17.github.io/C1_MS2_LIGHTSOUT/assets/images/earth_orb.svg",
		element: "Earth",
		description: "Alaric has captured the Earth Lumina to harness the power of earth!Crack the Alarics puzzle to free the Lumina. To help you crack his tricky puzzle, here is 3 more hints,  but you only have 3 mins and 30s to solve it."
	}
	startingModalForCurrentLevel(levelInfo);

	// Set the grid size and starting lights for level 3
	gridSize = 4;
	setUpGrid();
	startingLights = [2, 3, 4, 8, 10, 12];
	lightsToBeTurnedOn(startingLights);

	// Add the "water" class to all the lights
	let allLights = document.querySelectorAll(".light");
	allLights.forEach(function(light) {
		light.classList.add("earth");
	});

	// Starting number of hints
	let startingHints = 3;
	updateNumberOfHints(startingHints);
	//Set countdown timer in secounds
	countDownTime = 210;

	// Add info for winning modal
	winningInfo = {
		description: "Earth Lumia"
	};
}