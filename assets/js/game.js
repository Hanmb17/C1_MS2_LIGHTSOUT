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
        checkWin();
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
                // // Give the light the correct corresponding number
                var lightNumber = i * gridSize + j + 1;
                gameGridHtml += '<div class="light" id="'+ lightNumber +'"></div>';
        }
        // After creating all the lights for the row, add a closing </div> tag to close the row
        gameGridHtml += '</div>';
        }
        // At this point, the variable "gameGridHtml" contains the complete HTML code for the game grid.
        // Append the generated game grid HTML to the game-grid element
        document.getElementById('game-grid').innerHTML = gameGridHtml;
        // call starting state
        randomStart();
    }

    // function to turn the lights on and off by
    function toggleLights(light) {
        // Using toggle method to add or remove the class on, as necessary
        light.classList.toggle('on');
        // Get the light number from the id attribute
        var lightNumber = parseInt(light.getAttribute('id'));
        // Get the row and column of the clicked light
        var row = Math.floor((lightNumber - 1) / gridSize);
        var column = (lightNumber - 1) % gridSize;

        // Toggle adjacent lights
        toggleAdjacentLight(row, column - 1); // Left
        toggleAdjacentLight(row, column + 1); // Right
        toggleAdjacentLight(row - 1, column); // Up
        toggleAdjacentLight(row + 1, column); // Down
    }
    //Toggle the adjacent lights to the one pressed on and off
    function toggleAdjacentLight(row, column) {
        // Check if the specified row and column are within the bounds of the game grid
        if (row >= 0 && row < gridSize && column >= 0 && column < gridSize) {
          // Get the adjacent light using its id (light number)
          var light = document.getElementById((row * gridSize + column + 1).toString());
      
          // Toggle the adjacent light
          light.classList.toggle('on');
          light.classList.toggle('off');
        }
      }
      // Randomly creates a starting pattern for the game
      function randomStart() {
        /* Decide randomly how many lights will be pressed at the start.
        Minium number of buttons to be pressed of gridSize and max to be total lights*/
        var totalLights = Math.pow(gridSize,2);
        var numLightsToPress = Math.floor(Math.random() * (totalLights - gridSize + 1)) + gridSize;
        console.log(numLightsToPress);
        // Pick which lights to press
        // I want to ensure the first few selected are unique 
        // For the first amount of number needed to be unqiue
        var uniqueNumbersSet = new Set(); // Create a Set to store unique numbers.
        while (uniqueNumbersSet.size < gridSize) {
          var randomNumber = Math.floor(Math.random() * totalLights) + 1;
          uniqueNumbersSet.add(randomNumber);
        }
      
        var uniqueNumbersArray = Array.from(uniqueNumbersSet); // Convert the Set to an array.
        console.log(uniqueNumbersArray);
      
        // Add the remaining random numbers (may repeat)
        var remainingCount = numLightsToPress - gridSize;
      
        for (var i = 0; i < remainingCount; i++) {
          var randomNumber = Math.floor(Math.random() * totalLights) + 1;
          uniqueNumbersArray.push(randomNumber);
        }
      
        console.log(uniqueNumbersArray);

        // Loop through the uniqueNumbersArray and press the buttons one by one
        uniqueNumbersArray.forEach(function(lightNumber) {
            // Get the light element based on its ID (lightNumber)
            var light = document.getElementById(lightNumber.toString());

            // Toggle the light
            toggleLights(light);
            console.log('Light toggled:', lightNumber);
        });
      }
      // See if all lights are off to see if there is a win?
    function checkWin() {
      if (document.querySelectorAll('.on').length === 0) {
        alert('Congratulations! You won the level!');
        initLightsOutGame();
      }
    }
});

