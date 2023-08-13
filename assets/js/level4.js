// level4.js
// Export function to add level 4 detail to the game
export function loadLevel() {
    const levelInfo = {
        levelPicURL: "https://hanmb17.github.io/C1_MS2_LIGHTSOUT/assets/images/air_lumia.svg",
        type: 'level',
        levelTitle: "Eternal Luminous Swirl",
        levelNo:"4",
        orbPic:"https://hanmb17.github.io/C1_MS2_LIGHTSOUT/assets/images/air_orb.svg",
        element:"Air",
        description: "Explore Lumaria's eternal flames. Solve this puzzle to align the Fire Lumia's orbs to restore a Fire Lumia. Ignite orbs to awaken Lumian power. Can you solve the Luminous Blaze's enigma? Your Lumian journey begins."
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
    // Add count donw time in seconds
    countDownTime = 240;
    //startCountdownTimer();
    winningInfo = {
        type: 'winning',
        description: "Air Lumia",
        time: "30 seconds"
    };
}