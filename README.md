# Elemental Lumina - A Lights Out Based Game
(Developer: Hannah Bowles)

![Mockup image](docs/website_screen_shoot.png)

[Live webpage](https://hanmb17.github.io/C1_MS2_LIGHTSOUT/)

Elemental Lumina offers a different take on the timeless Lights Out game originally released by Tiger Electronics in 1995. In this revamped version, users find themselves on a quest to free the trapped Lumina by solving complex puzzles. The key to success is collecting elemental orbs by following a specific pattern, similar to the classic lights-out pattern.

As users progress through the game's four levels, the challenges become progressively more difficult, pushing their puzzle-solving skills to the limit. The ultimate goal is to collect all orbs in the correct sequence to complete each level and rescue all the trapped Lumina.

For those who enjoy the nostalgia of the original game, Elemental Lumina also features a free-play mode. Here, players can tailor their game by selecting the grid size they want to play on and choosing the number of hints at their disposal. This mode offers a fresh yet familiar experience reminiscent of classic Lights Out gameplay.
## Table of Content

1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requirements and Expectations](#user-requirements-and-expectations)
    3. [User Stories](#user-stories)
3. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Colours](#colours)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
    5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks and Tools](#frameworks-and-tools)
5. [Features](#features)
6. [Testing](#testing)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [Accessibility](#accessibility)
    4. [Performance](#performance)
    5. [Device testing](#performing-tests-on-various-devices)
    6. [Browser compatibility](#browser-compatibility)
    7. [Testing user stories](#testing-user-stories)
8. [Bugs](#bugs)
9. [Deployment](#deployment)
10. [Credits](#credits)
11. [Acknowledgements](#acknowledgements)

## Project Goals



### User Goals
- Easily grasp the concept of Elemental Lumina as a modern twist on the classic Lights Out game.
- Understand the objective of freeing Lumina by solving complex puzzles and collecting elemental orbs.
- Understand the gameplay mechanics involving the lights-out pattern and its connection to collecting elemental orbs.
- Advance through the game's levels.
- Experience the satisfaction of completing levels and rescuing Lumina.
- Explore the free-play mode and its customisation options for a personalised gaming experience.

### Site Owner Goals
- Attract a diverse range of gamers interested in puzzle-solving and strategy.
- Highlight the unique selling points of Elemental Lumina, emphasising its revamped gameplay.
- Present the game's features and mechanics clearly and engagingly.
- Encourage users to engage with both the main game and the free-play mode.
- Promote a sense of nostalgia for the classic Lights Out game while offering fresh gameplay.

### Developer Goals
- Develop an intuitive and user-friendly interface for players of various skill levels.
- Communicate the game's premise, mechanics, and objectives in a concise yet informative way.
- Create a seamless and enjoyable gameplay experience that balances challenge and reward.
- Ensure smooth progression through levels, maintaining user engagement and motivation.
- Implement the free-play mode with customisable options, respecting the classic Lights Out experience.
 
## User Experience

### Target Audience
- Casual gamers seeking a modern take on a classic game.
- Puzzle enthusiasts interested in challenging gameplay.
- Users are nostalgic for the original Lights Out game.
- Individuals who enjoy strategic thinking and problem-solving.


### User Requirements and Expectations
- Clear explanation of Elemental Lumina's unique gameplay and objective.
- A user-friendly interface that supports intuitive navigation through levels.
- Instruction on how to play.
- Gradually increasing challenges that test puzzle-solving skills.
- A sense of accomplishment upon completing levels and rescuing Lumina.
- Customisation options in the free-play mode for a personalised experience.
- Responsive design that adapts to users' screen size.

### User Stories

#### First-time User 
1. As a first-time user, I want to understand how Elemental Lumina differs from the classic Lights Out game.
2. As a first-time user, I want a clear explanation of the goal of the game and how to progress.
3. As a first-time user, I want to learn how the lights-out pattern is connected to collecting elemental orbs.
4. As a first-time user, I want to be introduced to the gradual challenge increase as I progress through levels.
5. As a first-time user, I want to experience the satisfaction of completing levels and rescuing Lumina.
6. As a first-time user, I want to explore the free-play mode and customise my gameplay experience.

#### Returning User
7. As a returning user, I want to dive back into the challenging world of Elemental Lumina.
8. As a returning user, I want to test my skills on increasingly difficult levels.
9. As a returning user, I want to relive the excitement of rescuing Lumina and progressing through the story.
10. As a returning user, I want to experiment with different grid sizes and hint options in the free-play mode.   

#### Site Owner 

## Design

### Design Choices
### Colours
When selecting the colours for this project, I wanted to give the user an out-of-space and alien feel. I chose a dark blue to represent space over black for a softer look. I then chose green to act as the secondary colour to add a feeling of being on another planet. I chose to use white mostly for the font as it contrasted nicely against the dark blue.To make the HUD and game buttons stand out, I opted for a purple colour that pops nicely over any blue areas and contrasts nicely against the green colour.

- #1C0539 Dark Blue - used as background colours.
- #457D75; used for buttons and certain headers.
- #FFFFFF used for text of the body.
- #421A61 used for overlay and main hue of the game elements.

<details><summary>Main Colours</summary>
<img src="docs/design/colour_scheme_main.png">
</details>

Level colours:
As I was creating levels I wanted them all to stand out visually but complement the main colours:

#### Level 1  
To represent Fire I used the following colours:

<details><summary>Level 1 Colours</summary>
<img src="docs/design/level_1_colour_scheme.png">
</details>

#### Level 2 
To represent water I used the following colours:

<details><summary>Level 2 Colours</summary>
<img src="docs/design/level_2_colour_scheme.png">
</details>

#### Level 3 
To represent Earth I used the following colours:

<details><summary>Level 3 Colours</summary>
<img src="docs/design/level_3_colour_scheme.png">
</details>

#### Level 4
To represent Air I used the following colours:

<details><summary>Level 4 Colours</summary>
<img src="docs/design/level_4_colour_scheme.png">
</details>

### Fonts
Google Fonts is used to import the 'Yusei Magic and Roboto' font used throughout the website:
- [Yusei Magic](https://fonts.google.com/specimen/Yusei+Magic)
- [Roboto](https://fonts.google.com/specimen/Roboto) 
<br> 
Yusei Magic whimsical design makes it perfect for headers, adding wonder and adventure to the game.
<br>
Roboto was the clear choice for the game's UI and text. Its modern, easy-to-read style guides players through menus and instructions while maintaining a professional look that doesn't overshadow gameplay.
<br>
'Roboto' and 'Yusei Magic' fonts blend perfectly in the game, providing solid mechanics and enhancing emotional connection to the story. They contribute to the unique identity and overall user experience.


### Structure


### Wireframes



## Technologies Used

### Languages
- [HTML](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://www.javascript.com)

### Frameworks and Tools
- [Bootstrap v5.3](https://getbootstrap.com/)
- [Git](https://git-scm.com/)
- [Github](https://github.com/)
- [GitPod](https://www.gitpod.io/)
- [Tiny PNG](https://tinypng.com/)
- [Balsamiq](https://balsamiq.com/wireframes/)
- [Google Fonts](https://fonts.google.com/about)
- [Font Awesome](https://fontawesome.com/search)
- [Code Pen](https://codepen.io/)
- [Affinity Developer 2 and Photo 2](https://affinity.serif.com/en-gb/)
- [Grammarly](https://www.grammarly.com/)
- [W3C validator](https://validator.w3.org/)
- [Jigsaw CSS validator](https://jigsaw.w3.org/css-validator/)
- [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)

## Features


## Testing

### HTML Validation
The W3C Markup Validation Service was used to validate the HTML of the website. All pages pass with no errors.


### CSS Validation


<details><summary>Style.css - Results</summary>
</details>

### Accessibility
The WAVE WebAIM web accessibility evaluation tool was used to ensure the website met high accessibility standards. All pages pass with 0 errors.



### Performance 

#### Lighthouse
On testing the pages Ligthouse through the Google developer tools I found all pages perfromed well for both mobile and desktop.



#### PageSpeed Test
PageSpeed Insights a tool by Google was used to test the performance of the website pages. All pages perform well overall however there is room for improvement for the mobile performance, such as serving the images in a WebP format.



### Performing tests on various devices
The website was tested on the following devices:
- Lenovo L340
- iPad Mini 
- iPhone 13
- Google Pixel 7

In addition, Google Chrome Developer Tools device toggle was used to test the website for all available device options and the responsive website design tester.

### Browser compatibility
The website was tested on the following browsers:
- Google Chrome
- Apple Safari
- Mozilla Firefox
- Microsoft Edge

### Testing user stories

#### First-time User

1. 


## Bugs

## Deployment
The website was deployed using GitHub Pages by following these steps:
1. In the GitHub repository navigate to the Settings tab
2. On the left-hand menu select Pages
3. For the source select Branch: master
4. After the webpage refreshes automatically you will see a ribbon on the top saying: Your site is live at https://hanmb17.github.io/C1_MS2_LIGHTSOUT/
<br>

You can fork the repository by following these steps:
1. Go to the GitHub repository
2. Locate the [GitHub Repository](https://github.com/Hanmb17/C1_MS2_LIGHTSOUT)
3. Click on the Fork button in the upper right-hand corner
<br>

You can clone the repository by following these steps:
1. Go to the GitHub repository
2. Locate the Code button above the list of files and click it
3. Select if you prefer to clone using HTTPS, SSH, or Github CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash
5. Change the current working directory to the one where you want the cloned directory
6. Type git clone and paste the URL from the clipboard ($ git clone https://github.com/Hanmb17/C1_MS2_LIGHTSOUT)
7. Press Enter to create your local clone

## Credits

### Media

Images were taken from [Canva](https://www.canva.com/), [Stock Adobe](https://stock.adobe.com/uk/), [Pexels](https://www.pexels.com/) and [Pixabay](https://pixabay.com/), with credit to the below artists

In order of appearance 

<br>




### Code 
Credits for code snippets used in order of appearance

- The HTML code for the [Navbar with toggler](https://getbootstrap.com/docs/5.3/components/navbar/) was taken from Bootstrap v5.3 documentation snippet - Hamburger button spans modified.
- The HTML code for the [Timeline](https://mdbootstrap.com/docs/standard/extended/timeline/) was from MD Bootstrap - altered to fit the site's responsive requirements.
- The CSS code for the [Timeline line and timeline circles](https://www.w3schools.com/howto/howto_css_timeline.asp) was taken from W3Schools and modified as needed.
- The HTML code for the [carousel](https://getbootstrap.com/docs/5.3/components/carousel/) was taken from Boostrap v5.3 documentation.
- The Javascript code for the [responsive multi-item carousel](https://www.codeply.com/p/0CWffz76Q9) was taken from a Codeply by Skelly.
- The HTML for the [cards](https://getbootstrap.com/docs/5.3/components/card/) was taken from Bootstrap v5.3 documentation.
- The Form dump was created using the Code Institutes form dump from the Love Running project in the CSS learning module.
- 404 page was built using the description on [GitHub Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site)
- The CSS for making the webpage [stretch to min height of 100vh](https://dev.to/fenok/stretching-body-to-full-viewport-height-the-missing-way-2ghd) was from a blog post on DEV by Leonid Fenko.

### Acknowledgements

I would like to take the opportunity to thank;

- My mentor, Mo Shami, for his support and excellent guidance throughout this project.
- Iris Smok from Code Institute, my Cohort facilitator, for her wonderful advice during our weekly stand-ups.
- My partner, Pete Williams, who kept me fed and watered and helped with testing.
- My work colleagues at EWE Building Plastics, who tested the site and offered great feedback