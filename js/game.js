class Game {
    constructor() {
      this.backgroundImage;
      this.peterLife;
      this.megs = [];
      this.peterLaugh;
      this.quagmireSound;
      this.stewieImage;
      this.quagmireImage;
      this.stewieSound;
      this.megCounter = 0;
      this.player = new Player(500,300)
      this.lives = 3;
      this.score = 0;
        }
  
    preload() {
      this.backgroundImage = loadImage("assets/griffins-livingroom.png");
      this.peterImage = loadImage("assets/peter-griffin-little.png");
      this.megImage = loadImage("assets/meg-griffin-little.png");
      this.stewieImage = loadImage("assets/stewie-griffin-little.png");
      this.peterLife = loadImage("assets/peter-life.png");
      this.peterLaugh = createAudio('assets/peter-griffin-hehe.mp3');
      this.quagmireSound = createAudio('assets/quagmire-giggity.mp3');
      this.stewieSound = createAudio('assets/stewie-loser.mp3');
    }
  

    draw() {


      image(this.backgroundImage, 0, 0, width, height);
      // Play the peterLaugh sound
      if (keyIsPressed && key === 'p') {
        this.peterLaugh.play();
      }
      if (keyIsPressed && key === 's') {
        this.peterLaugh.stop();
      }
      
      //COUNTDOWN TIMER

      
      
      for (let i = 0; i < this.lives; i++) {
     let x = i * (width / 17);
        image(this.peterLife, x, 0, 75, 75);
      }
      



      if(frameCount % 90 === 0) {
        console.log(this.megs);
        this.megs.push(new Obstacle(random(width)) )
    }
    this.megs.forEach(function (meg) {
    
        meg.draw()

    
     } )
      // update player position according to the cursor position
      this.player.updatePosition(mouseX, mouseY);
      this.player.draw();


    
      this.megs = this.megs.filter(meg => {

        if (meg.collision(this.player) || meg.y > windowHeight) {
            return false
        } else {
            return true
        }

    })



    }
  
          checkLives() {
        if (this.lives <= 0) {
           // clearInterval(countdownInterval);
            noLoop();
            image(game.stewieImage, width/2 - 250, height/2 - 250, 500, 500);
            let textX = width/2 - this.stewieImage.width/2;
            let textY = height/2 - this.stewieImage.height/2 -60;
            textAlign(CENTER);
            text("YOU LOST!", textX, textY);            
            fill('#FFFF00');
            stroke('#000000');
            strokeWeight(7);
            textSize(80);
            this.stewieSound.play();

         }
    }
    
} 