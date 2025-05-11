// Global variables for kaleidoscope settings
let symmetry = 6; // Number of symmetrical segments
let angle; // Angle of each segment
let currentStrokeWeight = 2;
let hueValue = 0;

function setup() {
  createCanvas(windowWidth, windowHeight); // Use the full browser window
  angleMode(DEGREES); // Easier to work with degrees for rotation
  angle = 360 / symmetry;
  background(10, 10, 20); // Dark background for vivid colors

  // Set color mode to HSB (Hue, Saturation, Brightness)
  // Hue: 0-360, Saturation: 0-100, Brightness: 0-100, Alpha: 0-255 (default for stroke)
  colorMode(HSB, 360, 100, 100);

  // Instructions
  textAlign(CENTER);
  fill(200);
  noStroke();
  text("Drag mouse to draw | '1'-'9' for symmetry | 'C' to clear | 'S' to save", width / 2, 30);
  text("'+'/'-' to change brush size", width / 2, 50);

}

function draw() {
  // No background clear here to create trails

  // Translate to the center of the canvas, this is our kaleidoscope's center
  translate(width / 2, height / 2);

  // Only draw if the mouse is pressed and has moved
  if (mouseIsPressed && (mouseX !== pmouseX || mouseY !== pmouseY)) {
    // Calculate mouse coordinates relative to the new (0,0) center point
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;

    // Set drawing properties
    // Cycle hue based on frameCount for changing colors
    hueValue = (hueValue + 0.5) % 360;
    let saturation = 90; // Keep saturation high for vivid colors
    let brightness = 100; // Full brightness
    let alpha = 180; // Semi-transparent strokes for layering (0-255)

    stroke(hueValue, saturation, brightness, alpha);
    strokeWeight(currentStrokeWeight);

    // Draw in each symmetrical segment
    for (let i = 0; i < symmetry; i++) {
      // Rotate by the calculated angle for the current segment
      rotate(angle);

      // Draw the primary line based on mouse movement
      line(mx, my, pmx, pmy);

      // Create the reflection within the segment
      push(); // Save the current transformation state (includes the rotation)
      scale(1, -1); // Flip the Y-axis to create a mirror image
      line(mx, my, pmx, pmy); // Draw the reflected line
      pop(); // Restore the transformation state before the scale
    }
  }
}

// Handle key presses for additional controls
function keyPressed() {
  if (key === 'c' || key === 'C') {
    // Clear the canvas by redrawing the background and instructions
    push();
    resetMatrix(); // Reset transformations to draw background correctly
    background(10, 10, 20);
    fill(200);
    noStroke();
    textAlign(CENTER);
    text("Drag mouse to draw | '1'-'9' for symmetry | 'C' to clear | 'S' to save", width / 2, 30);
    text("'+'/'-' to change brush size", width / 2, 50);
    pop();
  } else if (key === 's' || key === 'S') {
    saveCanvas('myKaleidoscopePattern', 'png'); // Save the current canvas
  } else if (key >= '1' && key <= '9') {
    symmetry = int(key);
    angle = 360 / symmetry;
    // Optionally clear canvas when symmetry changes
    push();
    resetMatrix();
    background(10, 10, 20);
    fill(200);
    noStroke();
    textAlign(CENTER);
    text("Drag mouse to draw | '1'-'9' for symmetry | 'C' to clear | 'S' to save", width / 2, 30);
    text("'+'/'-' to change brush size (Current: " + currentStrokeWeight + ")", width / 2, 50);
    pop();
  } else if (key === '+' || key === '=') { // '+' often requires shift, '=' is unshifted
    currentStrokeWeight = min(currentStrokeWeight + 1, 20); // Increase brush size, max 20
    updateBrushSizeText();
  } else if (key === '-' || key === '_') {
    currentStrokeWeight = max(currentStrokeWeight - 1, 1); // Decrease brush size, min 1
    updateBrushSizeText();
  }
}

function updateBrushSizeText() {
    push();
    resetMatrix(); // Reset transformations
    // Redraw only the text part that needs updating
    fill(10,10,20); // Cover old text
    noStroke();
    rectMode(CORNER);
    rect(width/2 - 200, 35, 400, 25); // Adjust rect to cover existing text precisely
    fill(200);
    textAlign(CENTER);
    text("'+'/'-' to change brush size (Current: " + currentStrokeWeight + ")", width / 2, 50);
    pop();
}


// Adjust canvas size if window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // Redraw background and text on resize
  push();
  resetMatrix();
  background(10, 10, 20);
  fill(200);
  noStroke();
  textAlign(CENTER);
  text("Drag mouse to draw | '1'-'9' for symmetry | 'C' to clear | 'S' to save", width / 2, 30);
  text("'+'/'-' to change brush size (Current: " + currentStrokeWeight + ")", width / 2, 50);
  pop();
}