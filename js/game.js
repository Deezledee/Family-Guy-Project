class Game {
    constructor() {
      this.backgroundImage;
      this.peterImage;
      this.obstacles = [];
      this.megImage;
      this.peterLaugh;
      this.quagmireSound;
      this.stewieSound;
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

        
        
      image(this.backgroundImage, 0, 0, width, height);
      // Play the peterLaugh sound
      if (keyIsPressed && key === 'p') {
        this.peterLaugh.play();
      }
      image(game.peterImage, mouseX, mouseY)

    }
  }
  