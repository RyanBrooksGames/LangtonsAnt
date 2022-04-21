class Ant {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
    let rng = int(random(4));
    switch (rng) {
      case 0:
        this.angle = 0;
        break;
      case 1:
        this.angle = 90;
        break;
      case 2:
        this.angle = 180;
        break;
      case 3:
        this.angle = 270;
        break;
      default:
        this.angle = 0;
        break;
    }
  }

  move() {
    for (var i = 0; i < cols; i++) {
      for (var j = 0; j < rows; j++) {
        if (this.onSpot(i, j)) {
          if (grid[i][j].white) {
            this.angle += 90;
          } else {
            this.angle -= 90;
          }

          if(this.angle > 270) {
            this.angle = 0;
          } else if (this.angle < 0) {
            this.angle = 270;
          }

          grid[i][j].flip();
        }
      }
    }

    switch (this.angle) {
        case 0:
          this.y++;
          break;
        case 90:
          this.x--;
          break;
        case 180:
          this.y--;
          break;
        case 270:
          this.x++;
          break;
      }

      if(this.x > cols) {
          this.x = 0;
      } else if (this.x < 0) {
          this.x = cols;
      }

      if(this.y > rows) {
          this.y = 0;
      } else if (this.y < 0) {
          this.y = rows;
      }
  }

  onSpot(i, j) {
    if (this.x == i && this.y == j) {
      return true;
    } else {
      return false;
    }
  }

  show() {
    push();
    noStroke();
    fill(255, 0, 0);
    ellipseMode(CENTER);
    angleMode(DEGREES);
    translate(this.x * this.w + this.w / 2, this.y * this.w + this.w / 2);
    rotate(this.angle);
    ellipse(0, 0, this.w / 1.75, this.w / 1.1);
    fill(0);
    ellipse(-this.w / 6, this.w / 5, this.w / 7, this.w / 7);
    ellipse(this.w / 6, this.w / 5, this.w / 7, this.w / 7);
    pop();
  }
}
