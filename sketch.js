function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
}

function draw() {
  fill(255, 100, 100);
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);
}
