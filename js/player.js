class Player {
	constructor(x, y, peterImage) {
		this.width = 100;
		this.height = 140;
		this.x = x;
		this.y = y;
        this.peterImage = peterImage;

	}

	updatePosition(x, y) {
		this.x = x;
		this.y = y;
	}

	draw() {
        image(this.peterImage, this.x, this.y);
	}
}

