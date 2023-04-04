const game = new Game()
//let timeLimit = 90;
// let countDown; //time limit - time passed

// Load game assets
function preload() {
   
    game.preload()
}

// Setup game
function setup() {
	let canvas = createCanvas(windowWidth, windowHeight);
    frameRate(30)
    
    //canvas.parent('canvas');
    //textSize(40); 
    noCursor();

}

function draw() {
    //let currentTime = int(millis() / 1000);
    //countDown = timeLimit - currentTime;

  //  if(countDown < 0){
//countDown = 0;


    //}
    //textSize(24)
    //fill("#000000")
   // text("Time: " + currentTime, 30, 380) 
   // image(game.peterImage, mouseX, mouseY)
  game.draw();
}