let w = 20;
let cols;
let rows;

let grid;
let ant;

let canvas;
let slider;
let h1;
let label;
let explain;
let rules;
let rules2;
let rules3;

function setup() {
  h1 = createElement("h1", "Langton's Ant");
  h1.position(20, 0);

  canvas = createCanvas(500, 500);
  canvas.position(20, h1.size().height+20);

  slider = createSlider(1, 100, 1, 1);
  slider.style('width', width + 'px')
  slider.position(20, canvas.position().y + height);

  label = createSpan("Frame Rate: " + slider.value());
  label.position(20, slider.position().y + 20);

  explain = createElement("h3", "Langton's ant is a two-dimensional universal Turing machine with a very simple set of rules but complex emergent behavior. It was invented by Chris Langton in 1986 and runs on a grid of black and white cells. The rules are as follows:");
  explain.position(canvas.position().x + width + 20, canvas.position().y);

  rules = createElement("h3", "Squares on a plane are colored variously either black or white. We arbitrarily identify one square as the \"ant\".The ant can travel in any of the four cardinal directions at each step it takes. The \"ant\" moves according to the rules below: ");
  rules.position(canvas.position().x + width + 20, canvas.position().y + explain.size().height+20);

  rules2 = createElement("h3", "At a white square, turn 90° clockwise, flip the color of the square, move forward one unit.");
  rules2.position(canvas.position().x + width + 40, rules.position().y + rules.size().height);

  rules3 = createElement("h3", "At a black square, turn 90° counter-clockwise, flip the color of the square, move forward one unit.");
  rules3.position(canvas.position().x + width + 40, rules2.position().y + rules2.size().height);

  cols = floor(width / w);
  rows = floor(height / w);
  grid = Create2DArray(cols, rows);
  ant = new Ant(floor(random(cols)), floor(random(rows)), w);

  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j, w);
    }
  }
}

function draw() {
  frameRate(slider.value());
  label.html("Frame Rate: " + slider.value());
  background(255);

  ant.move();

  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }

  ant.show();
}

function Create2DArray(cols, rows) {
  let array = new Array(cols);
  for (var i = 0; i < array.length; i++) {
    array[i] = new Array(rows);
  }

  return array;
}
