// level1.js
// Export function to add level 1 detail to the game
export function loadLevel() {
	// Show starting modal
	myModal.show();
	// Set the starting lights for level 1
	gridSize = 3;
	setUpGrid();

    // Set lights to be turne don at the start
	startingLights = [1, 3, 4, 5, 6];
	lightsToBeTurnedOn(startingLights);

	// Starting number of hints
	let startingHints = 3;
	updateNumberOfHints(startingHints);

	// Add the "fire" class to all the lights
	let allLights = document.querySelectorAll(".light");
	allLights.forEach(function(light) {
		light.classList.add("fire");
	});

	// Set Countdown time for the level
	countDownTime = 150;

	// Add info for winning modal
	winningInfo = {
		description: "Fire Lumia"
	};
}