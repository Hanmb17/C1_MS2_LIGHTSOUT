# Elemental Lumina - A Lights Out Based Game
(Developer: Hannah Bowles)

![Mockup image]()

[Live webpage](https://hanmb17.github.io/C1_MS2_LIGHTSOUT/)

Elemental Lumina is a twist on the classis lights out game by Tiger Electronics in 1995. Users have to solve the puzzles to free the trap Lumina, this is done by collecting the elemntal orbs. These orbs can only be collected in a certain pattern - the lights out pattern. Once all orbs are collected the user completes the level. The game consistes of 4 levels and progressivly get harder. There is also a freeplay mode that alows the user to pick the size of the grid they want to play and and how many hitns they want. - This is played like the orginal lights out game.
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
- 
- 
- 
- 
- 
- 
- 

### Site Owner Goals
-
- 
-
- 
- 
-

### Developer Goals
- 
- 
- 
- 
 
## User Experience

### Target Audience
- 
- 
- 

### User Requirements and Expectations
- 
- 
- 
- 
- 
- 
- 

### User Stories

#### First-time User 
1. 
2. 
3. 
4. 
5. 
6. 

#### Returning User
7. 
8. 
9. 
10.   
11. 

#### Site Owner 
12. 
13. 
14. 
15. 

## Design

### Design Choices
I wanted to choose colours for Kitty Den from Megatron's colouring, as he was the inspiration for the website. From a picture of him as a kitten, I picked out his beautiful blue eyes and pink nose as a starting point for the website colours.

<details><summary>Inspiration image - Megatron as a kitten</summary>
<img src="docs/design/megatron-inspiration-picture.JPG">
</details>

### Colours
Using these colours as a base: 
I chose an off-white for the background to help reduce too much glare.

I chose dark blue to allow for good contrast as the primary colour. Blue is also great for a care company as it gives the feeling of trustworthiness.

I chose a bright pink to pop against the white background and the dark blue while giving a playful feel to the site.

Feeling I needed another colour, I chose bright orange as it's complementary to blue and works well with pink. I used [ColorSpace](https://mycolor.space/) to help find the right orange for the pink. Orange is also great for getting the playful nature of the site across.


#### Branding Colours

- Blue: primary colour: #2E266D
- Pink: secondary colour: #DE1D8D
- Orange: tertiary colour: #FF735C

<details><summary>Branding Colour Ideas</summary>
<img src="docs/design/main-brand-colours.png">
</details>

The colours used on the site

- Blue: primary colour: #2E266D
- Pink: secondary colour: #DE1D8D
- Orange: tertiary colour: #FF735C
- Off-white: white colour: #FAFAFA;
- Overlay off-white: rgba(250, 250, 250, 0.7) - The off-white colour at 70% opacity
- White: #FFFFFF - Used for contrast against the pink and off-white background
- Opaque pink: rgba(222, 29, 141, 0.5) - Used for style elements to give a pop of colour
- Light orange: #ffd6d0 a shade of the orange tertiary colour to brighten areas.

I tested multiple options of blue and pink before choosing them and building the full-colour scheme around them to ensure I was happy with the colours and felt I had the best colours to match the site's requirements while remaining accessible.

I used the abode colour wheel and ColorSpace to decide on the final colours and test the contrast of the colours with the Abode's accessibility tools and tested on the live site with the WebAIM Wave tool.
Branding Colour Website Colours

<details><summary>Branding Colour Website Colours</summary>
<img src="docs/design/website-colours.png">
</details>
 

#### Colour Contrast Tests

<details><summary>Blue font on off-white background</summary>
<img src="docs/design/blue-font-contrast-test.png">
</details>

<details><summary>Off white font on blue background</summary>
<img src="docs/design/white-font-contrast-test.png">
</details>

<details><summary>Blue font on light orange background</summary>
<img src="docs/design/light-orange-blue-font-contrast.png">
</details>

<details><summary>Off-white font on pink background - failed test</summary>
<img src="docs/design/white-font-on-pink-fail-contrast.png">
</details>

<details><summary>white font on pink background - passed test</summary>
<img src="docs/design/white-font-pink-pass-contrast.png">
</details>


### Fonts
Google Fonts is used to import the 'Indie Flower and Urbanist' font used throughout the website:
- [Indie Flower](https://fonts.google.com/specimen/Indie+Flower) 
- [Urbanist](https://fonts.google.com/specimen/Urbanist)
<br> 
Indie Flower is predominantly used for headers and areas selected for styling, such as people's names. It helps them stand out and appear different from the other text on the site to make an instant impact as the user lands on the page.
<br>
Urbanist is used for the body of the text to make it easy to read and provides a modern look while offering a visual contrast against Indie Flower.
<br>
I picked these fonts as Indie Flower offers a playful and personal feel to the site, while Urbanist provides a clean, easy-to-read font with a sleek appearance. Together they work in harmony to portray the playful and professional feel of the company.

### Structure
The page's structure is in well-known, user-friendly and visually attractive way. On arriving, the user sees a recognisable navigation bar which on smaller displays is a hamburger menu to the right and the company's logo on the left. The website consists of six separate pages:
 
- Homepage - with the following sections unique selling points, intro to Kitty Den and customer testimonials. 
- About Us - Includes an intro section about what they are, the history and conception of the company in a timeline style and a meet-the-staff carousel.
- Gallery - With information about the resident cats and images showcasing cats enjoying Kitty Den services
- Services - Simple and clean pricing cards with service detail included.
- Contact Us - Map of Kitty Den's location, Contact form and other contact and business information. 
- 404 - An image depicting the landing on a 404 page with a redirection button to help users find their way back.

### Wireframes

<details><summary>Home</summary>
<img src="docs/wireframes/home-page-wireframe.png">
</details>
<details><summary>About Us</summary>
<img src="docs/wireframes/about-us-wireframe.png">
</details>
<details><summary>Services / Prices</summary>
<img src="docs/wireframes/services-wireframe.png">
</details>
<details><summary>Gallery</summary>
<img src="docs/wireframes/gallery-wireframe.png">
</details>
<details><summary>Contact Us</summary>
<img src="docs/wireframes/contact-us-wireframe.png">
</details>

## Technologies Used

### Languages
- [HTML](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/CSS)

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
- iPhone 8
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