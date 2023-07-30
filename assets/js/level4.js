// level4.js
// Export function to add level 4 detail to the game
export function loadLevel() {
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
    // Add count donw time in seconds
    countDownTime = 240;
    startCountdownTimer();
}