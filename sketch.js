//Ray Casting

let walls = [];
let particle;
let squares = [];

const sceneW = 400;
const sceneH = 400;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 5; i++) {
    let x1 = random(sceneW);
    let x2 = random(sceneW);
    let y1 = random(sceneH);
    let y2 = random(sceneH);
    walls[i] = new Boundary(x1, y1, x2, y2);
    squares[i] = new Square(x1, x2, 50);
  }
  walls.push(new Boundary(0, 0, sceneW, 0));
  walls.push(new Boundary(sceneW, 0, sceneW, sceneH));
  walls.push(new Boundary(sceneW, sceneH, 0, sceneH));
  walls.push(new Boundary(0, sceneH, 0, 0));

  for (let i = 0; i < squares.length; i++)
    for (let j = 0; j < 4; j++) {
      walls.push(squares[i].boundaries[j]);
  }

  particle = new Particle();
}

function draw() {
  background(0);
  particle.update(mouseX, mouseY);
  particle.show();
  particle.look(walls);
  for (let wall of walls) {
    wall.show();
  }
  for (s of squares) {
    s.show();
  }
}
