// level2.js
// Export function to add level 1 detail to the game
export function loadLevel() {
    
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