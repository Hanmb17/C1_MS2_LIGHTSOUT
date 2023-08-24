# Testing

Return back to the [README.md](README.md) file.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Page         | W3C URL                                                                                                 | Screenshot                                                             | Notes                               |
| ------------ | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ----------------------------------- |
| Home         | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fhanmb17.github.io%2FC1_MS2_LIGHTSOUT%2Findex.html)        | ![screenshot]()         | 1 warning. I have left the aria-label in as this div opens the instructions modal and increases accessibility for users.                     |
| Game         | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fhanmb17.github.io%2FC1_MS2_LIGHTSOUT%2Fgame.html)         | ![screenshot]()         | 4 warnings. I have left the aria-labels increases accessibility for users.   |
| 404          | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdougyb83.github.io%2Fminesweeper%2F404.html)          | ![screenshot]()          | 1 warning section lacks heading |                  |


### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.
When I ran a test on my URL errors and warnings due to Bootstrap where present. So I chose to paste my CSS code in directly.

| Script         | Screenshot                                                             | Notes                               |
| ------------ | ---------------------------------------------------------------------- | ----------------------------------- |
| Style.css       | ![screenshot]()         | Pass: No Errors  - 2 warnings due to using dynamic nature for setting fonts                   |


### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| File          | Screenshot                                                         | Notes                                                            |
| ------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------- |
| game.js       | ![screenshot]()       | Pass: No Errors  |
| level1.js | ![screenshot]() | Pass: No Errors                                                  |
| level2.js  | ![screenshot]()  | Pass: No Errors. Warnings for read only variables - this is correct as they are used in the game.js once this sript is imported.                                                 |
| level3.js | ![screenshot]( )| Pass: No Errors. Warnings for read only variables - this is correct as they are used in the game.js once this sript is imported.                                                   |
| level4.js | ![screenshot]( )| Pass: No Errors. Warnings for read only variables - this is correct as they are used in the game.js once this sript is imported.                                                   |




## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.
 Browser | Screenshot                                                                | Screenshot                                                                | Notes                 |
| ------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | --------------------- |
| Chrome  | ![screenshot]()  | ![screenshot]()  | Works as expected     |
| Firefox | ![screenshot]() | ![screenshot]() | Minor CSS differences |
| Edge    | ![screenshot]()    | ![screenshot]()     | Works as expected     |
| Opera   | ![screenshot]()   | ![screenshot]()    | Works as expected     |


## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.
 Device                   | Screenshot                                                          | Screenshot                                                          |  Notes             |
| ------------------------ | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------- | ----------------- |
| Mobile (DevTools)        | ![screenshot]()   | ![screenshot]()   |   Works as expected |
| Tablet (DevTools)        | ![screenshot]()   | ![screenshot]()   |  Works as expected |
| Desktop                  | ![screenshot]()      | ![screenshot]()      |  Works as expected |
| Google Pixel 7          | ![screenshot]() | ![screenshot]()  | Works as expected |
| Iphone 13        | ![screenshot]()    | ![screenshot]()    Works as expected |
| Iphone 8       | ![screenshot]()    | ![screenshot]()    Works as expected |




## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page    | Size    | Screenshot                                                           | Notes               |
| ------- | ------- | -------------------------------------------------------------------- | ------------------- |
| Home    | Mobile  | ![screenshot]()     | |
| Home    | Desktop | ![screenshot]()    |  |
| Game - Play Mode   | Mobile  | ![screenshot]()     |  |
| Game - Play Mode   | Desktop | ![screenshot]()    |  |
| Game - Freeplay | Mobile  | ![screenshot]()  |    |
| Game - Freeplay  | Desktop | ![screenshot]()|    |

## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

| Page         | User Action                                   | Expected Result                                                                | Pass/Fail | Comments |
| ------------ | --------------------------------------------- | ------------------------------------------------------------------------------ | --------- | -------- |

## User Story Testing

| User Story                                                                                                                                                                                                                            | Screenshot                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |


## Automated Testing
I haven't used automated testing as the project is only a small one however I would like to add it to the feature as the game grows and more features/levels are introduced. I would look a using JEST.

## Bugs

### Bug Report 1: Countdown Speed-Up Due to Uncleared Interval
#### Summary:
The countdown functionality in the code experiences an unexpected speed-up, leading to inaccurate countdown times. The root cause of this issue is traced to an uncleared interval, causing multiple intervals to run simultaneously.

#### Expected Behavior:
The countdown should consistently and accurately decrement at the specified interval.
#### Observed Behavior:
The countdown speeds up over time, resulting in incorrect and inconsistent countdown times.
#### Impact:
Due to this bug, the countdown functionality becomes unreliable, potentially causing confusion and incorrect time management for users relying on the countdown.
#### Root Cause:
The root cause of this bug is the failure to clear the interval before starting the countdown timer.
#### Resolution:
by adding this line if (countDown) {
    clear interval(countDown);
  }
This ensures countdown interval is always reset before a new countdown is started.

## Bug: Incomplete Functionality in `game.html` Page Without Mode Reset

### Summary

Upon testing, a bug was identified where users who directly accessed the `game.html` page without picking the mode could set up a "freeplay" grid, but not all functions worked as expected. This issue originated from the initial mode-setting mechanism, which did not handle this scenario.

### Expected Behavior

All game functions should work as intended regardless of whether the mode is explicitly set or not.

### Observed Behavior

Certain game functions do not work properly when users access the `game.html` page without a mode being set.

### Root Cause

The root cause of this bug was traced to the initial game mode-setting mechanism. The mode was originally set when the DOM loaded using the following code:

```javascript
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
gameMode = urlParams.get("mode");
```

### Resolution
To address this issue, a new function setGameMode() was introduced. This function properly sets the game mode, even if the mode parameter is missing from the URL. The function is designed to handle scenarios where the mode is not explicitly provided. Here's the implementation:

```javascript
function setGameMode() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    gameMode = urlParams.get("mode");
    if (!gameMode) {
        gameMode = "freeplay";
    }
    console.log(gameMode);
    return gameMode;
}
```
By using setGameMode() once the DOM has loaded, users can now access and interact with all functions, regardless how they arrive at the page.


## Unfixed Bugs

There are no remaining bugs that I am aware of.