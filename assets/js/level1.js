// level1.js
// Export function to add level 1 detail to the game
export function loadLevel() {
    // Set up starting modal
    const levelInfo = {
        // levelPicURL:,
        type: 'level',
        levelTitle: "Eternal Luminous Blaze",
        levelNo:"1",
        // orbPic:,
        element:"fire",
        description: "Explore Lumaria's eternal flames. Solve this puzzle to align the Fire Lumia's orbs to restore a Fire Lumia. Ignite orbs to awaken Lumian power. Can you solve the Luminous Blaze's enigma? Your Lumian journey begins."
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
    var allLights = document.querySelectorAll('.light');
    allLights.forEach(function(light) {
        light.classList.add('fire');
    });

    countDownTime = 150;
    //startCountdownTimer();

    // Set up winning modal
    winningInfo = {
        type: 'winning',
        description: "Fire Lumia",
        time: "30 seconds"
    };
}