// level2.js
// Export function to add level 1 detail to the game
export function loadLevel() {
     // Set up starting modal
     const levelInfo = {
        // levelPicURL:,
        type: 'level',
        levelTitle: "Eternal Luminous Oasis",
        levelNo:"2",
        // orbPic:,
        element:"Water",
        description: "Explore Lumaria's eternal flames. Solve this puzzle to align the Fire Lumia's orbs to restore a Fire Lumia. Ignite orbs to awaken Lumian power. Can you solve the Luminous Blaze's enigma? Your Lumian journey begins."
    };
    startingModalForCurrentLevel(levelInfo);
    // Set the starting lights for level 2
    gridSize = 4;
    setUpGrid();
    startingLights = [1, 2, 3, 8, 9, 10, 11, 12];
    lightsToBeTurnedOn(startingLights);

    // Add the "water" class to all the lights
    var allLights = document.querySelectorAll('.light');
    allLights.forEach(function(light) {
        light.classList.add('water');
    });
    // Add count donw time in seconds
    countDownTime = 180;
    //startCountdownTimer();
}