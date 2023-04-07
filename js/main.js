const game = new Game();

// Load game assets
function preload() {
  game.preload();
}

// Setup game
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  frameRate(60);


  noCursor();
}

function draw() {
  
  game.draw();
}
