function setup() {
  createCanvas(600, 400);
  background(224, 118, 31);
}

function draw() {
  if (mouseIsPressed) {
  let x = random(width);
  let y = random(height);
  quad(x, y, 25, 48, 87, 120);
  fill(242, 183, 5);
}
}

function mousePressed() {
  let r = random(50, 400);
}
