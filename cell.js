class Cell {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.white = true;
  }

  flip() {
    this.white = !this.white;
  }

  show() {
    stroke(0);
    strokeWeight(5);
    if (this.white) {
      fill(255);
    } else {
      fill(0);
    }

    rect(this.x * this.w, this.y * this.w, this.w, this.w);
  }
}
