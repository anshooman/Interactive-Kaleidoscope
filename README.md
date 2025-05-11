# p5.js Interactive Kaleidoscope

## Description

This project is a simple, interactive kaleidoscope created using p5.js. It generates beautiful, symmetrical patterns based on your mouse movements on the canvas. As you drag your mouse, lines are drawn and reflected across multiple axes of symmetry, creating an evolving visual effect reminiscent of a traditional kaleidoscope. The colors of the lines change dynamically over time, adding to the visual appeal.

## Features

* **Mouse-Driven Patterns:** Draw intricate patterns by simply moving your mouse while holding down the button.
* **Adjustable Symmetry:** Change the number of symmetrical segments (from 1 to 9) to alter the complexity and appearance of the patterns.
* **Dynamic Coloring:** Lines are drawn with colors that cycle through the hue spectrum, creating vibrant and evolving visuals.
* **Adjustable Brush Size:** Increase or decrease the thickness of the drawing lines.
* **Persistent Trails:** Patterns accumulate on the canvas, creating a layered effect.
* **Responsive Canvas:** The kaleidoscope adapts to the size of your browser window.
* **Save Your Art:** Option to save your favorite kaleidoscope patterns as PNG images.

## How to Use

1.  **Open the Sketch:**
    * You can run this sketch by copying the `sketch.js` (or equivalent p5.js code) into the [p5.js Web Editor](https://editor.p5js.org/).
    * Alternatively, if you have a local p5.js setup, include the script in an HTML file with the p5.js library.

2.  **Draw:**
    * Click and drag your mouse across the canvas area to start drawing.

3.  **Controls:**
    * **Mouse Drag:** Draws patterns on the canvas.
    * **'1' to '9' keys:** Changes the number of symmetrical segments. For example, pressing '6' will create a 6-fold symmetry. The canvas will clear when symmetry is changed.
    * **'C' key:** Clears the canvas, allowing you to start a new pattern.
    * **'S' key:** Saves the current artwork on the canvas as a PNG file named `myKaleidoscopePattern.png`.
    * **'+' or '=' key:** Increases the brush stroke weight (makes lines thicker).
    * **'-' or '_' key:** Decreases the brush stroke weight (makes lines thinner).

## Demo

*(Imagine a GIF or a static image here showing colorful, symmetrical patterns being drawn on a dark background as a mouse cursor moves.)*

The application starts with a dark background. As you drag the mouse, lines of varying colors will appear, mirrored across several axes radiating from the center of the screen. The number of axes and the thickness of the lines can be changed using the keyboard controls.

## How to Run the Code

### Using the p5.js Web Editor (Recommended for ease of use):

1.  Go to [https://editor.p5js.org/](https://editor.p5js.org/).
2.  Delete the default code in the `sketch.js` tab.
3.  Copy the entire JavaScript code provided for the kaleidoscope and paste it into the `sketch.js` tab in the editor.
4.  Click the "Play" button (triangle icon) to run the sketch.

### Running Locally:

1.  Make sure you have the p5.js library. You can download it from [p5js.org](https://p5js.org/download/) or link to it via a CDN.
2.  Create an `index.html` file in a project folder:
    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>p5.js Kaleidoscope</title>
        <style>
          body {
            padding: 0;
            margin: 0;
            overflow: hidden; /* To prevent scrollbars */
          }
        </style>
        <script src="[https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js](https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js)"></script>
        <script src="sketch.js"></script>
      </head>
      <body>
      </body>
    </html>
    ```
3.  Create a `sketch.js` file in the same folder and paste the kaleidoscope JavaScript code into it.
4.  Open the `index.html` file in your web browser.

## Future Enhancements (Ideas)

* More complex drawing tools (e.g., drawing shapes instead of lines).
* Different symmetry modes (e.g., translational, rotational with offsets).
* User interface for controls (sliders for brush size, color pickers).
* Ability to change background color.
* Sound reactivity.
* Performance optimization for very complex patterns.

---

Enjoy creating your own unique symmetrical art!
