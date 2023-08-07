// level3.js
// Export function to add level 3 detail to the game
export function loadLevel() {
    const levelInfo = {
        // levelPicURL:,
        type: 'level',
        levelTitle: "Eternal Luminous Hill",
        levelNo:"3",
        // orbPic:,
        element:"Earth",
        description: "Explore Lumaria's eternal flames. Solve this puzzle to align the Fire Lumia's orbs to restore a Fire Lumia. Ignite orbs to awaken Lumian power. Can you solve the Luminous Blaze's enigma? Your Lumian journey begins."
    };
    startingModalForCurrentLevel(levelInfo);

    // Set the starting lights for level 3
    gridSize = 4;
    setUpGrid();
    startingLights = [2, 3, 4, 8, 10, 12];
    lightsToBeTurnedOn(startingLights);

    // Add the "water" class to all the lights
    var allLights = document.querySelectorAll('.light');
    allLights.forEach(function(light) {
        light.classList.add('earth');
    });
    // Add count donw time in seconds
    countDownTime = 210;
    // startCountdownTimer();
     // Set up winning modal
     winningInfo = {
        type: 'winning',
        description: "Earth Lumia",
        time: "30 seconds"
    };
}