class Game {
	constructor() {
		//this.player = new Player()
		this.backgroundImage
		this.peterImage
		this.obstacles = []
		this.megImage
	}

	preload() {
		this.backgroundImage= loadImage("assets/griffins-livingroom.png")
		this.peterImage = loadImage("assets/peter-griffin-little.png")
		this.megImage = loadImage("assets/meg-griffin-little.png")
        this.peterLaugh = loadSound('assets/peter-griffin-hehe.mp3');
        this.quagmireSound = loadSound('assets/quagmire-giggity.mp3');
        this.stewieSound = loadSound('assets/stewie-loser.mp3');
        //peterLaugh.autoplay(true);

	}

	draw() {
image(this.backgroundImage, 0, 0, width, height);
this.peterLaugh.play()


	}
}