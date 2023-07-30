// level3.js
// Export function to add level 3 detail to the game
export function loadLevel() {
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
    startCountdownTimer();
}