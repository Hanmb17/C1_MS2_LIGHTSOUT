// level1.js
// Export function to add level 1 detail to the game
export function loadLevel() {
    // Set up starting modal
    const levelInfo = {
        levelPicURL: "https://hanmb17.github.io/C1_MS2_LIGHTSOUT/assets/images/fire_lumia.svg",
        levelNo:"1",
        orbPic:"https://hanmb17.github.io/C1_MS2_LIGHTSOUT/assets/images/fire_orb.svg",
        element:"Fire",
        description: "Alaric has captured the Fire Lumina to harness the power of fire! Crack Alaric's puzzle to free the Lumina. To help you crack his tricky puzzle, you have 3 hints, but you only have 2 mins and 30s to solve it."
    };
    startingModalForCurrentLevel(levelInfo);

    // Set the starting lights for level 1
    gridSize === 3;
    setUpGrid();
    
    startingLights = [1, 3, 4, 5, 6];
    lightsToBeTurnedOn(startingLights);

    // Starting number of hints
    let startingHints = 3;
    updateNumberOfHints(startingHints);

    // Add the "fire" class to all the lights
    let allLights = document.querySelectorAll('.light');
    allLights.forEach(function(light) {
        light.classList.add('fire');
    });

    // Set Countdown time for the level
    countDownTime = 150;

    // Add info for winning modal
    winningInfo = {
        type: 'winning',
        description: "Fire Lumia"
    };
}