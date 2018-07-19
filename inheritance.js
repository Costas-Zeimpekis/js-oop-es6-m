class Shape {

  constructor(color) {
    this.color = color;
  }

  move() {
    console.log('move');
  }
}

const s = new Shape();


class Circle extends Shape {
  constructor(color) {
    super(color)
  }

  draw() {
    console.log(this.color);
  }
}

const c = new Circle('red');

c.draw();