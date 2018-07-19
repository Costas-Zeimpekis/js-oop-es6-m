class Shape {

  constructor(color, radius) {
    this.color = color;
    this.radius = radius;
  }

  move() {
    console.log('Shape move');
  }
}

const s = new Shape();


class Circle extends Shape {
  constructor(color, radius) {
    super(color, radius)
  }

  move() {
    super.move();
    console.log('circle move');
  }

  draw() {
    console.log(this.color);
  }
}

const c = new Circle('red', 1);

c.draw();

c.move();