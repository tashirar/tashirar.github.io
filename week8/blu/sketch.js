function setup() {
  createCanvas(600, 400);
  background(225);
}

function draw() {
  noStroke();
  fill(random(0, 255), random(0, 255), 200);
  ellipse(mouseX, mouseY, 20);
}

function mousePressed() {
  background(225);
}


