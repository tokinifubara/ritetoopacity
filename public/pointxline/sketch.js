function setup() {
    loadCamera();
    loadTracker();
    loadCanvas(600, 400);
    noStroke();
    fill(0);
    rect(0, 0, width, height);
    frameRate(2);
}
      
function draw() {
    getPositions();
    drawPoints();
}

function drawPoints() {
    for (var i=0; i<positions.length -1; i++) {
        // set the color of the ellipse based on position on screen
        fill(positions[i][0], positions[i][1], positions[i][0]); // Colors dots
        
        // draw ellipse
        noStroke();
        ellipse(positions[i][0], positions[i][1], 4, 4);
        
        // draw line
        stroke(positions[i][0], positions[i][1], positions[i][0]);
        line(positions[i][0], positions[i][1], positions[i+1][0], positions[i+1][1]);
    }
}

function doubleClicked() {
    noStroke();
    fill(0); 
    rect(0, 0, width,height);
}

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}