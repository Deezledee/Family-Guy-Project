const game = new Game()

// Load game assets
function preload() {
   /* playerImage = loadImage('assets/peter-griffin-little.png');
    megImage= loadImage('assets/meg-griffin-little.png');
    stewieImage = loadImage('assets/stewie-griffin-little.png');
    quagmireImage = loadImage('assets/quagmire-little.png');
    backgroundImage = loadImage('assets/griffins-livingroom.png');
    peterLaugh = loadSound('assets/peter-griffin-hehe.mp3');
    quagmireSound = loadSound('assets/quagmire-giggity.mp3');
    stewieSound = loadSound('assets/stewie-loser.mp3');
	game.preload()*/
    game.preload()
}

// Setup game
function setup() {
	createCanvas(windowWidth, windowHeight);
    textSize(40); 
    noCursor();
    
   // player = new Player(500, 300, createImg('assets/peter-griffin-little.png'));

}

function draw() {
    
	game.draw()
}