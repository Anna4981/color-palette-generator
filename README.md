Color Palette Generator

A small web tool that generates a random set of hex color swatches. Click any swatch to copy its hex code to the clipboard.

Built as Task 14 (Level 1, Day 14) of the Web Development internship track.

Features
Button to generate a new palette (the spacebar works too)
6 color swatches, each showing its hex code
Click-to-copy using the Clipboard API
Brief confirmation message when a color is copied
Text color switches between black and white so hex codes stay readable on any swatch
Responsive layout that adapts to different screen sizes
Tools Used
HTML5
CSS3
JavaScript
Project Structure
color-palette-generator/
├── index.html    # Page structure
├── style.css     # Styling and layout
├── script.js     # Palette generation, copy logic, confirmation message
└── README.md
How to Run
Download or clone the project and keep all files in the same folder.
Open index.html in any modern web browser.
Click Generate New Palette (or press the spacebar) to create new colors.
Click a swatch to copy its hex code.
How It Works
Random hex color: Math.random() produces a number between 0 and 0xFFFFFF, which is converted to a base-16 string, padded to 6 digits and prefixed with #.
Rendering: swatches are created with JavaScript and added to the page through the DOM.
Copying: navigator.clipboard.writeText() copies the hex code. A hidden-textarea fallback is used if the Clipboard API is unavailable (for example, when the page is not served over HTTPS).
Feedback: a toast message appears for a short time after copying, then hides itself with setTimeout.
Learning Objectives
Practice random value generation
Use the Clipboard API
Practice DOM rendering
Author

Anna Makgabo Thantsha# color-palette-generator
