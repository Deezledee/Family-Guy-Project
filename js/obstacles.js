class Obstacle {
    constructor(x, megImage){
        this.width = 108;
        this.height = 160;
        this.x = x;
        this.y = -100;
        this.megImage = megImage;
        this.active = false;
    }

    activate() {
        this.active = true;
    }

	fall() {
		this.y++;
	}

	draw() {
        if (this.active) this.fall();
        image(this.megImage, this.x, this.y);
	}

    collision(playerInfo) {
        // console.log("collision")

        // Get the middle of the obstacle
        let obstacleX = this.x + this.width / 2;
        let obstacleY = this.y + this.height / 2;

        // Get the middle of the player
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height / 2;
        
        // dist(x1, y1, x2, y2) returns the distance between the objects
        return dist(obstacleX, obstacleY, playerX, playerY) <= 25;

    }

}