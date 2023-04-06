class Obstacle {
  constructor(x) {
    this.width = 108;
    this.height = 160;
    this.x = x;
    this.y = -100;
  }

  draw() {
    this.y += 4;
    image(game.megImage, this.x, this.y, this.width, this.height);
  }

  collision(playerInfo) {
    // Get the middle of the obstacle
    let megX = this.x + this.width / 2;
    let megY = this.y + this.height / 2;

    // Get the middle of the player
    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    // dist(x1, y1, x2, y2) returns the distance between the objects
    if (dist(megX, megY, playerX, playerY) <= 70) {
      game.lives--;
      game.megSound.play();

      return true;
    }

    return false;
  }
}
