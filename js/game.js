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
    this.megSound;
    this.player = new Player(500, 300);
    this.lives = 3;
    this.timer = 60;
    this.speedMeg;
    let startOverButton;
    let backToMenu;
  }

  preload() {
    this.backgroundImage = loadImage("assets/griffins-livingroom.png");
    this.peterImage = loadImage("assets/peter-griffin-little.png");
    this.megImage = loadImage("assets/meg-griffin-little.png");
    this.stewieImage = loadImage("assets/stewie-griffin-little.png");
    this.quagmireImage = loadImage("assets/quagmire-little.png");
    this.peterLife = loadImage("assets/peter-life.png");
    this.peterLaugh = createAudio("assets/peter-griffin-hehe.mp3");
    this.quagmireSound = createAudio("assets/quagmire-giggity.mp3");
    this.stewieSound = createAudio("assets/stewie-loser.mp3");
    this.megSound = createAudio("assets/meg-upset.mp3");
  }

  draw() {
    image(this.backgroundImage, 0, 0, width, height);
    // Play the peterLaugh sound
    if (keyIsPressed && key === "p") {
      this.peterLaugh.play();
    }
    if (keyIsPressed && key === "s") {
      this.peterLaugh.stop();
    }

    //COUNTDOWN TIMER
    textAlign(CENTER, CENTER);
    textSize(100);
    text(this.timer, (width / 5) * 4.7, height / 12);

    if (this.timer >= 40) {
      this.speedMeg = 90; // set min frameCount level
    } else if (this.timer < 40 && this.timer >= 20) {
      this.speedMeg = 35; // set intermediate frameCount level
    } else if (this.timer < 20) {
      this.speedMeg = 15; // set initial frameCount level
    }

    if (frameCount % 60 == 0 && this.timer > 0) {
      // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      this.timer--;
    }

    if (frameCount % this.speedMeg === 0) {
      this.megs.push(new Obstacle(random(width)));
    }
    this.megs.forEach(function (meg) {
      meg.draw();
    });
    // update player position according to the cursor position
    this.player.updatePosition(mouseX, mouseY);
    this.player.draw();

    this.megs = this.megs.filter((meg) => {
      if (meg.collision(this.player) || meg.y > windowHeight) {
        return false;
      } else {
        return true;
      }
    });

    for (let i = 0; i < this.lives; i++) {
      let x = i * (width / 17);
      image(this.peterLife, x, 0, 75, 75);
    }

    this.checkLives();

    if (this.timer == 0) {
      image(this.quagmireImage, width / 2 - 250, height / 2 - 250, 500, 500);
      fill("#FFFF00");
      stroke("#000000");
      strokeWeight(8);
      textSize(100);
      textAlign(CENTER, CENTER);
      text("YOU WON!", width / 2, height / 2);
      this.startOverButton = createButton("Start Over");
      this.startOverButton.position(
        width / 2 - 250 - this.startOverButton.width,
        height / 2.3
      );
      this.startOverButton.class("startOver");
      this.startOverButton.mousePressed(function () {
        window.location.href = "game.html";
      });
      this.backToMenu = createButton("Back To Menu");
      this.backToMenu.position(
        width / 2 - 250 - this.backToMenu.width,
        height / 1.9
      );
      this.backToMenu.class("backToMenu");
      this.backToMenu.mousePressed(function () {
        window.location.href = "index.html";
      });
      this.quagmireSound.play();
      this.peterLaugh.stop();
      noLoop();
      noCursor();
      cursor(this.peterImage, mouseX, mouseY);
    }
  }

  checkLives() {
    if (this.lives <= 0) {
      image(this.stewieImage, width / 2 - 250, height / 2 - 250, 500, 500);
      fill("#FFFF00");
      stroke("#000000");
      strokeWeight(8);
      textSize(100);
      textAlign(CENTER, CENTER);
      text("YOU LOST!", width / 2, height / 2);
      this.startOverButton = createButton("Start Over");
      this.startOverButton.position(
        width / 2 - 150 - this.startOverButton.width,
        height / 2.2
      );
      this.startOverButton.class("startOver");
      this.startOverButton.mousePressed(function () {
        window.location.href = "game.html";
      });
      this.backToMenu = createButton("Back To Menu");
      this.backToMenu.position(
        width / 2 - 150 - this.backToMenu.width,
        height / 1.8
      );
      this.backToMenu.class("backToMenu");
      this.backToMenu.mousePressed(function () {
        window.location.href = "index.html";
      });
      this.stewieSound.play();
      this.megSound.stop();
      this.peterLaugh.stop();
      noLoop();
      noCursor();
      cursor(this.peterImage, mouseX, mouseY);
    }
  }
}
