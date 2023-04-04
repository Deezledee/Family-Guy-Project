class Game {
    constructor() {
      this.backgroundImage;
      this.megs = [];
      this.peterLaugh;
      this.quagmireSound;
      this.stewieSound;
      this.megCounter = 0;
      this.player = new Player(500,300)
    }
  
    preload() {
      this.backgroundImage = loadImage("assets/griffins-livingroom.png");
      this.peterImage = loadImage("assets/peter-griffin-little.png");
      this.megImage = loadImage("assets/meg-griffin-little.png");
      this.peterLaugh = createAudio('assets/peter-griffin-hehe.mp3');
      this.quagmireSound = createAudio('assets/quagmire-giggity.mp3');
      this.stewieSound = createAudio('assets/stewie-loser.mp3');
    }
  

    draw() {
/////// check the frameCount. For every 90 frames, make another meg active, megCounter++
      image(this.backgroundImage, 0, 0, width, height);
      // Play the peterLaugh sound
      if (keyIsPressed && key === 'p') {
        this.peterLaugh.play();
      }
      if (keyIsPressed && key === 's') {
        this.peterLaugh.stop();
      }
      
      // check collision
      //const playerInfo = this.player.getInfo();
      //const collision = this.meg.collision(playerInfo);
      //if (collision) {
        //this.player.kill();
      //}

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

      //const collision = this.meg.collision(playerInfo);
      this.megs = this.megs.filter(meg => {
     //   console.log(this)

        if (meg.collision(this.player) || meg.y > windowHeight) {
            return false
        } else {
            return true
        }
    })
}

    
    }
  
  