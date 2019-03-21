let stoneImg, grassImg, brickImg;
let greenField;
let wall;
let brick;
let rows, cols, w;
let bombhrenov;
let FBR;
let dafiga;

function preload() {
  stoneImg = loadImage("sprites/Blocks/SolidBlock.png");
}

function setup() {
  let canvas = createCanvas(680, 520);
  canvas.parent('game');
  w = width / cols;
  bombhrenov = createSprite(200, 200, 50, 50);
  FBR = createSprite(mouseX, mouseY, 100, 100);
  dafiga = new Group();
  for (let i = 0; i < 20; i++) {
    let kuFBR = createSprite(random(width), random(height), random(20), random(20))
    kuFBR.velocity.x = random(-5, 5);
    kuFBR.velocity.y = random(-5, 5);
    dafiga.add(kuFBR);
  }

}

function draw() {
  background(50);
  FBR.position.x = mouseX;
  FBR.position.y = mouseY;
  FBR.displace(bombhrenov);
  FBR.displace(dafiga);
  for (element of dafiga) {
    if (element.position.x < 0 || element.position.x > width)
      element.velocity.x *= -1;
    if (element.position.y < 0 || element.position.y > height)
      element.velocity.y *= -1;
    element.displace(dafiga);
  }
  drawSprites();
}