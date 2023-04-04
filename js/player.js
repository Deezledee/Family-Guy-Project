class Player {
	constructor(x, y) {
		this.width = 100;
		this.height = 140;
		this.x = x;
		this.y = y;
        //this.peterImage = peterImage;
		this.alive = true;
		this.life = 3;
	}

	getInfo() {
		return {
			x: this.x,
			y: this.y,
			width: this.width,
			height: this.height,
		};
	}

	kill() {
		this.alive = false;
	}

	updatePosition(x, y) {
		if (this.alive) {
			this.x = x;
			this.y = y;
		} else {
			this.x = -200;
			this.y = -200;
		}
	}

	draw() {
        image(game.peterImage, this.x, this.y, this.width, this.height);
	}
}

