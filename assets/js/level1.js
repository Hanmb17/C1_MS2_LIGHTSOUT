// level1.js
// Export function to add level 1 detail to the game
export function loadLevel() {
    // Set the starting lights for level 1
    gridSize === 3;
    setUpGrid();
    
    startingLights = [1, 3, 4, 5, 6];
    lightsToBeTurnedOn(startingLights);

    // Add the "fire" class to all the lights
    var allLights = document.querySelectorAll('.light');
    allLights.forEach(function(light) {
        light.classList.add('fire');
    });
}