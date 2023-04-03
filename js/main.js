const game = new Game()

// Load game assets
function preload() {
   
    game.preload()
}

// Setup game
function setup() {
	let canvas = createCanvas(windowWidth, windowHeight);
    //canvas.parent('canvas');
    //textSize(40); 
    noCursor();
    game.setup();

}

function draw() {
   // image(game.peterImage, mouseX, mouseY)
  game.draw();
}