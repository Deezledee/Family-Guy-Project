class Game {
    constructor() {
      this.backgroundImage;
      this.peterImage;
      this.obstacles = [];
      this.megImage;
      this.peterLaugh;
      this.quagmireSound;
      this.stewieSound;
      this.player;
      this.meg;
      this.megCounter = 0;
    }
  
    preload() {
      this.backgroundImage = loadImage("assets/griffins-livingroom.png");
      this.peterImage = loadImage("assets/peter-griffin-little.png");
      this.megImage = loadImage("assets/meg-griffin-little.png");
      this.peterLaugh = createAudio('assets/peter-griffin-hehe.mp3');
      this.quagmireSound = createAudio('assets/quagmire-giggity.mp3');
      this.stewieSound = createAudio('assets/stewie-loser.mp3');
    }
  
    setup() {
        this.player = new Player(500, 300, this.peterImage);
        this.meg = new Obstacle(200, this.megImage);
        ////create a for loop with 100 megs
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
      const playerInfo = this.player.getInfo();
      const collision = this.meg.collision(playerInfo);
      if (collision) {
        this.player.kill();
      }

      // update player position according to the cursor position
      this.player.updatePosition(mouseX, mouseY);
      this.player.draw();

      // multiple megs
      this.meg.draw();

    }
  }
  