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
    var startingLights;
    var clickedLights = [];
   

    // Initialise the Lights Out game when the page loads
    initLightsOutGame();

    // Add an event listener to respond to button clicks on the game page
    document.addEventListener('click', function(event) {
        // Get the target element that triggered the click event
        var target = event.target;
        if (target.classList.contains('light')) {
          // If the clicked element is a light, toggle its state and adjacent lights
          toggleLights(target);
          // Add the light number to the array of clickedLights
          var lightNumber = parseInt(target.getAttribute('id'));
          clickedLights.push(lightNumber);
          console.log(clickedLights);
          if (target.classList.contains('flashing')) {
            stopFlashing(target);
        }
        
        // Update the move counter
        moveCount++;
        document.getElementById('move-counter').textContent = moveCount;
    }
        
        // Check if all lights are out
        checkWin();
      });
      
    // Add event listener to the restart button
    document.getElementById('reset-button').addEventListener('click', function() {
        resetGame();
      });

    // Add event listener to the hint button
    document.getElementById('hint-button').addEventListener('click', function() {
        
        // Get solution for current grid pattern
        var currentSolution = solution();

        // Check if the currentSolution is not empty
        if (currentSolution.length > 0) {
            // Randomly select a number from the currentSolution
            var randomIndex = Math.floor(Math.random() * currentSolution.length);
            var selectedNumber = currentSolution[randomIndex];

            // Get the corresponding light element using its ID (selectedNumber)
            var light = document.getElementById(selectedNumber.toString());

                 // Add the flashing class to the selected light
                light.classList.add('flashing');
                console.log("hint light: ", light);
                // Disable the hint button to prevent the user cicking it again
                document.getElementById('hint-button').disabled = true;
                // Update the flashingLight variable to the current flashing light
                flashingLight = light;
                } else {
            // If the currentSolution is empty, show a message
            console.log('No hint available.');
        }
      }); 
      
    // Function to stop the flashing effect when the light is clicked
    function stopFlashing(light) {
        console.log(light);
        // Remove the flashing class and event listener from the light
        light.classList.remove('flashing');
        // Enable the hint button to allow the user clicking it again
        document.getElementById('hint-button').disabled = false;
    }

    // function to initialise the Lights Out game
    function initLightsOutGame() {
        // Generate the game grid HTML based on the specified gridSize
        //This variable will store the HTML for the game grid.
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
        // call starting s
        randomStart();
    }

    // function to turn the lights on and off
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
      
        startingLights = Array.from(uniqueNumbersSet); // Convert the Set to an array.
        console.log(startingLights);
      
        // Add the remaining random numbers (may repeat)
        var remainingCount = numLightsToPress - gridSize;
      
        for (var i = 0; i < remainingCount; i++) {
          var randomNumber = Math.floor(Math.random() * totalLights) + 1;
          startingLights.push(randomNumber);
        }

        console.log(startingLights);
        // Turn the lights on function
        lightsToBeTurnedOn(startingLights);
      } 
      // See if all lights are off to see if there is a win?
    function checkWin() {
        // count how many on classes are presents if 0 = win
      if (document.querySelectorAll('.on').length === 0) {
        alert('Congratulations! You won the level!');
        // start a new game
        initLightsOutGame();
      }
    }
    // reset game function
    function resetGame() {
        var allLights = document.querySelectorAll('.light');
        allLights.forEach(function(light) {
            light.classList.remove('on');
            stopFlashing(light); // Pass the light element to stopFlashing()
        });

        // Reset move counter
        moveCount = 0;
        document.getElementById('move-counter').textContent = moveCount;
    
        // Use startingArray to reset the lights to their initial pattern
        lightsToBeTurnedOn(startingLights);
        // Reset clicked buttons
        clickedLights = [];
    }

    function lightsToBeTurnedOn(LightsToTurnOn) {
        // Loop through the startingLights and press the buttons one by one
        LightsToTurnOn.forEach(function(lightNumber) {
          var light = document.getElementById(lightNumber.toString());
          toggleLights(light);
        });
        //Reset clicked buttons
        clickedLights = [];
    }

    // Finds solution for current pattern 
    function solution(){
        
        // Create an array of all lights pressed
        var allLightsPressed = startingLights.concat(clickedLights);
        console.log(allLightsPressed);

        // Count how many times each number appears
        // Initialise an empty object to store the counts of each number
        const count = {};

        // Loop through the allLightsPressed array
        allLightsPressed.forEach(function(number) {
        // If the number is already a key in the count object, increment its count
            if (count[number]) {
                count[number]++;
            } else {
                // If the number is not a key in the count object, initialise its count to 1
                count[number] = 1;
            }
        });

        console.log(count);

        // Initialise an empty array to store the solution
        const solution = [];

        // Loop through the allLightsPressed array again to find numbers with odd counts
        allLightsPressed.forEach(function(number) {
        // Check if the count of the number is odd
            if (count[number] % 2 === 1) {
                // Add the number to the solution array if it's odd
                solution.push(number);
            }
        });

        console.log(solution);
        return(solution);
        
    }

});

