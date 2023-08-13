/*
Lights Out Game Script
This script handles the functionality of the Lights Out game, where players need to turn off all the lights on the grid.
The game initialises the grid (3 by 3 initially), allows the player to click on lights to toggle them and provides features like a timer,
move counter, and hints. The goal is to turn off all the lights on the grid in the least number of moves and time.
*/

 // Game variables
 var gridSize = 3;
 var hintLight;
 var moveCount = 0;
 var startingLights;
 var clickedLights = [];
 var gameMode; // To store game mode
 var loadedLevels = []; // Array to keep track of loaded levels
 var currentLevel = 1;
 const maxLevel = 4;
 var countDownTime;
 var timerStartTime;
 var countDown;
 var winningInfo;
 var availableHints = 0;
 let myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));

 // Function to stop the flashing effect when the light is clicked
 function stopFlashing(light) {
    console.log(light);
    // Remove the flashing class and event listener from the light
    light.classList.remove('flashing');
    // Enable the hint button to allow the user clicking it again

     // Disable the hint button if no more hints are available
     if (availableHints > 0) {
        document.getElementById('hint-button').classList.remove("deactivated-button");
        console.log('No more hints available.');}
}

// function to initialise the Lights Out game
function initLightsOutGame() {
    moveCount = 0;
    document.getElementById('move-counter').textContent = moveCount;
    // call starting mode
    if (gameMode === "play"){
        if (currentLevel <= 4 ){
        loadCurrentLevel(currentLevel);
    }else{
        console.log("final modal");
        finalModal();}
    }else{
    setUpGrid();
}
}
// Set Up level Modal start
function startingModalForCurrentLevel(levelInfo){
    // Get modal body 
    const modalBody = document.querySelector('.modal-body');

    // Update modal body information
    console.log(levelInfo.levelPicURL);
    modalBody.querySelector("#levelPic").src = levelInfo.levelPicURL;
    //modalBody.querySelector("#levelTitle").textContent = levelInfo.levelTitle;
    modalBody.querySelector("#levelNo").textContent = levelInfo.levelNo;
    modalBody.querySelector('#orbPic').src = levelInfo.orbPic;
    modalBody.querySelector('#orbElement').textContent = levelInfo.element;
    modalBody.querySelector('#levelDescription').textContent = levelInfo.description;
    modalBody.querySelector("#buttonLabel").textContent = "Play ";
    modalBody.querySelectorAll('.winning').forEach(element => element.classList.add('d-none'));




    console.log("Modal loading");
    // Create a new Bootstrap Modal instance using the modal element
    const myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
    myModal.show();
    
}
// Update modal for winning message
function winningModal(winningInfo) {
    console.log(winningInfo)
    const modalBody = document.querySelector('.modal-body');
    
    // Update modal body information
    //modalBody.querySelector('#timeFreed').classList.remove('d-none'); // Show the timeFreed element
    modalBody.querySelectorAll('.winning').forEach(element => element.classList.remove('d-none')); // Show other winning elements

     // Show the modal and update content that is changed after a delay
     setTimeout(() => {
        modalBody.querySelector("#buttonLabel").textContent = "Next Level ";
        modalBody.querySelector('#levelDescription').textContent = `You freed the ${winningInfo.description} in ${moveCount} moves and ${winningInfo.time}.`; // Set the updated text content after a short delay
        const myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
        myModal.show(); // Show the modal with updated content after a short delay
     }, 200);
}

// Update modal for winning message
function finalModal() {
    console.log('final modal loading');
    const modalBody = document.querySelector('.modal-body');
    
    // Update modal body information
    modalBody.querySelector("#levelPic").src = "assets/images/all_lumia.svg";
    modalBody.querySelector('#winningMessage').textContent = "Congratulations, You freed all the Lumia";
    modalBody.querySelector('#winningMessage').classList.remove('d-none');
    modalBody.querySelectorAll('.finalMessage').forEach(element => element.classList.add('d-none'));
    modalBody.querySelector("#infoModal").classList.add('mt-4', 'm-lg-0', 'd-flex', 'flex-column', 'align-items-center', 'align-lg-end');

     // Show the modal and update content that is changed after a delay
     setTimeout(() => {
        modalBody.querySelector("#buttonLabel").textContent = "Home";
        const myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
        myModal.show(); // Show the modal with updated content after a short delay
     }, 200);
}

// Set up the game grid
function setUpGrid(){// Generate the game grid HTML based on the specified gridSize
    //This variable will store the HTML for the game grid.
    var gameGridHtml = ''; 
    //This outer loop creates the rows for the game grid using the gridSize variable.
    for (var i = 0; i < gridSize; i++) {
        gameGridHtml += '<div class="row p-0">';
        // Inner loop: Create lights for each row of the game grid using the gridSize variable.
        for (var j = 0; j < gridSize; j++) {
            // // Give the light the correct corresponding number
            var lightNumber = i * gridSize + j + 1;
            gameGridHtml += '<div class="light col" id="'+ lightNumber +'"></div>';
        }
        // After creating all the lights for the row, add a closing </div> tag to close the row
        gameGridHtml += '</div>';
    }
    // At this point, the variable "gameGridHtml" contains the complete HTML code for the game grid.
    // Append the generated game grid HTML to the game-grid element
    document.getElementById('game-grid').innerHTML = gameGridHtml;

    if (gameMode === "freeplay"){
        randomStart();
    }
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

// Function to to import the level js script 
async function loadCurrentLevel(levelIndex) {
    console.log("Loading level:", levelIndex);
var levelScript = "level" + levelIndex + ".js";
console.log(levelScript);

// Check if the level has already been loaded
if (loadedLevels.includes(levelScript)) {
    // If already loaded, set up the game grid for the current level
    const module = await import("./" + levelScript);
    console.log(module);
    if (typeof module.loadLevel === "function") {
        module.loadLevel();
    }
} else {
    // If not loaded, load the level script dynamically
    try {
        // Use dynamic import to load the level script
        const module = await import("./" + levelScript);
        console.log("second module", module);
        // Call the loadLevel function from the imported module
        if (typeof module.loadLevel === "function") {
            module.loadLevel();
        }
        // Mark the level as loaded
        loadedLevels.push(levelScript);
    } catch (error) {
        console.error("Error loading level script:", error);
    }
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
    // alert('Congratulations! You won the level!');
    if (gameMode==="play"){
        timeSolvedIn();
        //winningInfo.movecount = movecount;
        currentLevel++;
       // winningModal(winningInfo);
        if (currentLevel >= 6){
            
            alert('Congratulations! You completed all the levels!');
        } 
            else {
                // start the next level
                winningModal(winningInfo);
                //initLightsOutGame();
            }
        } else {
            // start a new game
            initLightsOutGame();
        }
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
    resetCountDownTimer();
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

// Create countdown timer
function startCountdownTimer() {
    timerStartTime = countDownTime;
    if (countDown) {
        clearInterval(countDown);
    }
    // Get the countdown display element from the HTML document
    const countdownElement = document.getElementById('timer');
    // Display the initial countdown value
    displayTime(countDownTime);
  
    // Start the countdown using setInterval
    countDown = setInterval(() => {
      // Decrease the remaining time by 1 second
      countDownTime--;
  
      // Update the countdown displayTime with the updated time
      displayTime(countDownTime);
  
      // Check if the countdown has reached 0 or below
      if (countDownTime<= 0) {
        // If the countdown has ended, display "Time out"
        endCount();
      }
    }, 1000);

    //displayTime(count)
    // Function to display the remaining time in the format (MM:SS)
  function displayTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    // Ternary operator to display time
    countdownElement.innerHTML = `
      ${minutes < 10 ? "0" : ""}${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}
    `;
  }

  // Function to display "Time out" when the countdown ends
  function endCount() {
    countdownElement.innerHTML = "Time out";
  }
}


// Function to pause the countdown timer
function pauseCountdownTimer() {
    clearInterval(countDown);
}

// Function to resume the countdown timer
function resumeCountdownTimer() {
    startCountdownTimer();
}

// reset the timer
function resetCountDownTimer(){
    countDownTime = timerStartTime;
    startCountdownTimer();
} 

function timeSolvedIn(){
    clearInterval(countDown);
    const elaspedTime = timerStartTime - countDownTime;
    console.log("timesolved in", elaspedTime);

     // Function to display the remaining time in the format (MM:SS)
    function setTimeSolvedIn(seconds) {

        if (seconds >= 60){
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        winningInfo.time = `${minutes} minutes ${remainingSeconds} seconds`;
        console.log(winningInfo.time);

        }else{
            winningInfo.time = `${seconds} seconds`;
            console.log(winningInfo.time);
        }
  }

    console.log(setTimeSolvedIn(elaspedTime));
}

// Function to update the number of hints the user has left
function updateNumberOfHints(startingHints){
    let totalHints = startingHints + availableHints;
    availableHints = totalHints;
    document.getElementById('hints-count').textContent = availableHints;
}


// Wait for the DOM content to be fully loaded before executing JavaScript code - as I'm making changes to them
document.addEventListener('DOMContentLoaded', function() {

     // Get the game mode from the URL parameter
     const queryString = window.location.search;
     const urlParams = new URLSearchParams(queryString);
     gameMode = urlParams.get('mode');
     console.log(gameMode);
     
    
    // Initialise the Lights Out game when the page loads
    initLightsOutGame();

    // Add event listener to for when modal closes to start timer
    var modal = document.getElementById('staticBackdrop');
    modal.addEventListener('hidden.bs.modal', async function() {
        console.log('Modal hidden event triggered');
    
        var button = modal.querySelector('.btn-primary');
        var buttonText = button.textContent;
    
        if (buttonText.includes("Next Level ")) {
            console.log("Next Level to start");
            await new Promise(resolve => setTimeout(resolve, 200)); // Delay for demonstration
    
            myModal.hide();
            //currentLevel++;
            initLightsOutGame();
        } else if (buttonText.includes("Home")) {
            window.location.href = 'index.html'; // Replace with your actual home page URL
        } else {
            // Call the startCountdownTimer() function
            await startCountdownTimer();

            myModal.hide();
        }
    
        console.log('Button Text:', buttonText);
    });

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

        // Check if all lights are out
        checkWin();
    }
      });

    // Add event listener to  expand emgame menu
    document.getElementById('menu-button').addEventListener('click', function() {
        this.classList.toggle('expanded');
        document.getElementById('toggle-menu').classList.toggle('expanded');

        // Check if the menu button has the 'expanded' class to determine the menu state
        if (this.classList.contains('expanded')) {
         pauseCountdownTimer();
        } else {
            resumeCountdownTimer();
     }

    });

    // Add event listener to the home button
    document.getElementById('home-button').addEventListener('click', () => {
    window.location.href = 'index.html'; // Replace with your actual home page URL
});

      



    // Add event listener to the restart button
    document.getElementById('reset-button').addEventListener('click', function() {
        resetGame();
      });

    // Add event listener to the hint button
    document.getElementById('hint-button').addEventListener('click', function() {
        if (!this.classList.contains('deactivated-button')) {
        if (availableHints > 0) {
            // Decrement the available hints count
            availableHints--;
            document.getElementById('hints-count').textContent = availableHints;
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
                document.getElementById('hint-button').classList.add("deactivated-button");
                // Update the flashingLight variable to the current flashing light
                flashingLight = light;
            } else {
                // If the currentSolution is empty, show a message
                console.log('No hint available.');
            }
           
        } else {
            console.log('No more hints available.');
        }
    }
      }); 
});

