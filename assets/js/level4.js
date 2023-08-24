// level4.js
// Export function to add level 4 detail to the game
export function loadLevel() {
    const levelInfo = {
        levelPicURL: "https://hanmb17.github.io/C1_MS2_LIGHTSOUT/assets/images/air_lumia.svg",
        levelNo:"4",
        orbPic:"https://hanmb17.github.io/C1_MS2_LIGHTSOUT/assets/images/air_orb.svg",
        element:"Air",
        description: "Alaric has captured the Air Lumina to harness the force of air! Crack the Alarics puzzle to free the Lumina. To help you crack his cunning puzzle, here is 3 more hints,  but you only have 4 mins to solve it."
    };
    startingModalForCurrentLevel(levelInfo);
    // Set grid size for level 4
    gridSize = 5;
    setUpGrid();
    // Set the starting lights for level 4
    startingLights = [2, 5, 6, 10, 18, 20, 21, 22, 23];
    lightsToBeTurnedOn(startingLights);

    // Add the "water" class to all the lights
    var allLights = document.querySelectorAll('.light');
    allLights.forEach(function(light) {
        light.classList.add('air');
    });

    // Starting number of hints
    let startingHints = 3;
    updateNumberOfHints(startingHints);

    // Set countdown timer in secounds
    countDownTime = 240;

     // Add info for winning modal
    winningInfo = {
        type: 'winning',
        description: "Air Lumia"
    };
}