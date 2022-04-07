let x = 0;

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  fill(0)
  x+= -0.02;
  translate (width/2, height/2);
  fill(random(255), random(255), random(255), 225);
  rotate(x);
  circle(100, 0, 50, 100);
}

function mousePressed(){
 background(0);
}