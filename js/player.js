class Player {
	constructor(peterImage) {
		this.width = 100
		this.height = 140
		this.x = 0
		this.y = 0
        this.peterImage = peterImage;

	}

	draw() {
	

		

        image(this.peterImage, 0, 0, width, height); }
	}

