# eVidhyalaya

A dynamic web application to display a catalog of courses, featuring search/filter functionality and the ability to sort courses by title and duration. The header and sorting label feature a striking color-shifting animation for a unique visual appeal.



## Table of Contents

* Description
* Approach & Technology Stack
* Features
* How to Run/View the Project
    * Live Demo
    * Local Setup
* Assumptions Made
* Video Explanation


## Description

This project provides an interactive course catalog designed for easy navigation and information retrieval. Users can quickly find courses using a search bar that filters by title, instructor, and description. Additionally, courses can be sorted alphabetically by title or numerically by duration, providing flexible viewing options. A key visual element is the animated header and sort label, which dynamically shift colors and apply a glow effect, adding a modern and engaging touch to the user interface.

## Approach & Technology Stack

The project is built using a **purely client-side approach** leveraging fundamental web technologies:

* **HTML5:** For the semantic structure and content of the web page.
* **CSS3:** For styling, layout (Flexbox, Grid), responsive design via media queries, and all animations/transitions. Custom CSS properties (variables) are extensively used for maintainability and theme management.
* **JavaScript (ES6+):** For handling dynamic content rendering, filtering logic, and sorting algorithms. The `DOMContentLoaded` event ensures all HTML is loaded before script execution, and event listeners manage user interactions with the filter input and sort dropdown.

This stack was chosen for its simplicity, performance, and the ability to deploy easily as static files.

## Features

* **Course Display:** Renders a list of courses from a JavaScript data array.
* **Search/Filter:** Real-time filtering of courses based on text input in the search bar (matches against title, instructor, and description).
* **Sorting:**
    * Sort courses by Title (A-Z and Z-A).
    * Sort courses by Duration (Shortest to Longest and Longest to Shortest).
* **Responsive Design:** Adapts layout and element sizes for optimal viewing on various devices (desktops, tablets, mobile phones) using CSS Media Queries.
* **Interactive UI:**
    * **Flip Cards:** Course cards have a flip animation on hover, revealing detailed information on the back.
    * **Dynamic Header & Sort Label:** The header background and the "Sort By:" label text change color and feature a glowing text shadow, controlled by a CSS `@keyframes` animation.
* **No Results Message:** Displays a clear message when no courses match the current filter criteria.

## How to Run/View the Project

You can view a live version of the project hosted on GitHub Pages here:

https://aasthathecoderx.github.io/eVidhyalaya/



### Local Setup

To run this project on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AasthathecoderX/eVidhyalaya
    ```
    

2.  **Navigate to the project directory:**
    ```bash
    cd eVidhyalaya
    ```

3.  **Open `index.html`:**
    Simply open the `index.html` file in your preferred web browser. You can usually do this by double-clicking the file in your file explorer.

    No build tools or server setup are required as this is a static client-side application.

## Assumptions Made


* For duration sorting, the `duration` strings are expected to contain a number followed by a unit (e.g., "12 Weeks", "8 Weeks") or specific keywords like "Self-Paced" or "Ongoing Access". The `parseDuration` function in `script.js` attempts to convert these into a comparable numeric value (days), treating "Self-Paced" and "Ongoing Access" as very long durations for sorting purposes. If other complex duration formats are introduced, the `parseDuration` function might need further refinement.

* The `background.jpg` file exists in the same directory as `style.css` and `index.html` for the body background to appear.

## Video Explanation

For a detailed walkthrough of the project's functionality, code structure, and design choices, please watch the video explanation:

https://youtu.be/aFEuz4xKRZ8


