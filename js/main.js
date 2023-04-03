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
    //game.draw()
    
   //player = new Player(500, 300, createImg('assets/peter-griffin-little.png'));

}

function draw() {
   // image(game.peterImage, mouseX, mouseY)
  game.draw()
}