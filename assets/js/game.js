/*
Lights Out Game Script
This script handles the functionality of the Lights Out game, where players need to turn off all the lights on the grid.
The game initialises the grid (3 by 3 initially), allows the player to click on lights to toggle them and provides features like a timer,
move counter, and hints. The goal is to turn off all the lights on the grid in the least number of moves and time.
*/

// Wait for the DOM content to be fully loaded before executing JavaScript code - as I'm making changes to them
document.addEventListener('DOMContentLoaded', function() {
    // Game variables
    var gridSize = 3;
    var hintLight;
    var moveCount = 0;
   

    // Initialise the Lights Out game when the page loads
    initLightsOutGame();

    // Add an event listener to respond to button clicks on the game page
    document.addEventListener('click', function(event) {
        // Get the target element that triggered the click event
        var target = event.target;
        if (target.classList.contains('light')) {
          // If the clicked element is a light, toggle its state and adjacent lights
          toggleLights(target);
          
        
        }
      });
      


    // function to initialize the Lights Out game
    function initLightsOutGame() {
        // Generate the game grid HTML based on the specified gridSize
        //This varibbe will store the HTML for the game grid.
        var gameGridHtml = ''; 
        //This outer loop creates the rows for the game grid using the gridSize variable.
        for (var i = 0; i < gridSize; i++) {
            gameGridHtml += '<div class="row">';
            // Inner loop: Create lights for each row of the game grid using the gridSize variable.
            for (var j = 0; j < gridSize; j++) {
                gameGridHtml += '<div class="light"></div>';
        }
        // After creating all the lights for the row, add a closing </div> tag to close the row
        gameGridHtml += '</div>';
        }
        // At this point, the variable "gameGridHtml" contains the complete HTML code for the game grid.
        // Append the generated game grid HTML to the game-grid element
        document.getElementById('game-grid').innerHTML = gameGridHtml;
    }

    // function to turn the lights on and off by
    function toggleLights(light) {
        // Using toggle method to add or remove the class on, as necessary
        light.classList.toggle('on');
    }
      

});

