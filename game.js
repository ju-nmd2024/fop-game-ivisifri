let crocoX = 100;
let crocoY = 100;
let cloudX = 100;
let cloudY = 100;
let cloudS = 1.4;

function setup() {
  createCanvas(800, 600);
  background(126, 248, 255);
}

//character function
function crocodile(x, y, s) {
  let black = (0, 0, 0);

  //head
  noStroke();
  fill(56, 215, 72);
  quad(
    x + 3 * s,
    y + 18 * s,
    x + 125 * s,
    y + 12 * s,
    x + 120 * s,
    y + 70 * s,
    x + 12 * s,
    y + 65 * s
  );

  //body
  quad(
    x + 90 * s,
    y + 30 * s,
    x + 300 * s,
    y + 40 * s,
    x + 240 * s,
    y + 93 * s,
    x + 110 * s,
    y + 100 * s
  );

  //tail
  quad(
    x + 299 * s,
    y + 40 * s,
    x + 375 * s,
    y + 20 * s,
    x + 315 * s,
    y + 80 * s,
    x + 239 * s,
    y + 93 * s
  );

  //leg1
  quad(
    x + 110 * s,
    y + 100 * s,
    x + 156 * s,
    y + 90 * s,
    x + 142 * s,
    y + 120 * s,
    x + 100 * s,
    y + 120 * s
  );

  //leg2
  quad(
    x + 205 * s,
    y + 90 * s,
    x + 240 * s,
    y + 93 * s,
    x + 240 * s,
    y + 120 * s,
    x + 195 * s,
    y + 120 * s
  );

  //eyelid
  noStroke();
  fill(56, 215, 72);
  beginShape();
  vertex(x + 60 * s, y + 15 * s);
  bezierVertex(
    x + 65 * s,
    y - 10 * s,
    x + 90 * s,
    y - 20 * s,
    x + 105 * s,
    y + 20 * s
  );
  endShape();

  //eyelid2
  beginShape();
  vertex(x + 95 * s, y + 10 * s);
  bezierVertex(
    x + 100 * s,
    y - 10 * s,
    x + 135 * s,
    y - 20 * s,
    x + 135 * s,
    y + 45 * s
  );
  endShape();

  //mouth
  fill(black);
  quad(
    x + 20 * s,
    y + 40 * s,
    x + 90 * s,
    y + 40 * s,
    x + 85 * s,
    y + 52 * s,
    x + 23 * s,
    y + 50 * s
  );

  //tongue
  fill(255, 0, 0);
  beginShape();
  vertex(x + 50 * s, y + 45 * s);
  bezierVertex(
    x + 50 * s,
    y + 90 * s,
    x + 70 * s,
    y + 70 * s,
    x + 70 * s,
    y + 45 * s
  );
  endShape();

  //back
  fill(41, 107, 35);
  triangle(
    x + 135 * s,
    y + 33 * s,
    x + 155 * s,
    y + 25 * s,
    x + 175 * s,
    y + 35 * s
  );
  triangle(
    x + 175 * s,
    y + 35 * s,
    x + 190 * s,
    y + 26 * s,
    x + 210 * s,
    y + 36 * s
  );
  triangle(
    x + 210 * s,
    y + 36 * s,
    x + 225 * s,
    y + 29 * s,
    x + 235 * s,
    y + 37 * s
  );
  triangle(
    x + 235 * s,
    y + 37 * s,
    x + 251 * s,
    y + 27 * s,
    x + 270 * s,
    y + 39 * s
  );
  triangle(
    x + 270 * s,
    y + 39 * s,
    x + 288 * s,
    y + 30 * s,
    x + 299 * s,
    y + 40 * s
  );

  //fingers
  stroke(black);
  strokeWeight(1 * s);
  line(x + 101 * s, y + 119 * s, x + 115 * s, y + 110 * s);
  line(x + 115 * s, y + 110 * s, x + 125 * s, y + 115 * s);
  line(x + 125 * s, y + 115 * s, x + 135 * s, y + 110 * s);
  line(x + 135 * s, y + 110 * s, x + 142 * s, y + 120 * s);
  line(x + 101 * s, y + 119 * s, x + 142 * s, y + 120 * s);

  //fingers2
  line(x + 196 * s, y + 120 * s, x + 210 * s, y + 112 * s);
  line(x + 210 * s, y + 112 * s, x + 218 * s, y + 114 * s);
  line(x + 218 * s, y + 114 * s, x + 229 * s, y + 110 * s);
  line(x + 229 * s, y + 110 * s, x + 239 * s, y + 120 * s);
  line(x + 239 * s, y + 120 * s, x + 196 * s, y + 120 * s);

  //eye1
  fill(black);
  ellipse(x + 112 * s, y + 19 * s, 8 * s, 10 * s);

  //eye2
  ellipse(x + 80 * s, y + 16 * s, 8 * s, 10 * s);
}

//clouds function
function cloud(x, y, s) {
  noStroke();
  fill(255);
  ellipse(x + 10 * s, y + 60 * s, 45 * s, 40 * s);
  ellipse(x + 28 * s, y + 40 * s, 35 * s, 30 * s);
  ellipse(x + 57 * s, y + 46 * s, 35 * s, 32 * s);
  ellipse(x + 60 * s, y + 70 * s, 50 * s, 38 * s);
  ellipse(x + 35 * s, y + 74 * s, 50 * s, 50 * s);
}

//land function
function land(x, y, s) {
  fill(151, 114, 80);
  noStroke();
  beginShape();
  vertex(x + 100 * s, y + 200 * s);
  bezierVertex(
    x + 105 * s,
    y + 170 * s,
    x + 180 * s,
    y + 170 * s,
    x + 190 * s,
    y + 200 * s
  );
  endShape();
}

//function water
function water() {
  noStroke();
  fill(26, 30, 156);
  rect(0, 575, 800, 25);
}

function draw() {
  cloud(-50, 40, 1.3);
  cloud(260, 70, 1.4);
  cloud(100, 210, 1.7);
  cloud(540, 20, 1.5);
  cloud(500, 250, 1.3);
  cloud(760, 200, 1.6);

  crocodile(300, 450, 0.6);

  water(0, 575);

  land(-20, 10, 3);
}
