'use strict';
const _radius = Symbol();
const _draw = Symbol();
const _radian = new WeakMap();
const _move = new WeakMap();
const _privateProps = new WeakMap();

class Circle {
  constructor(radius, radian) {
    this[_radius] = radius;
    _radian.set(this, radian);
    _move.set(this, () => {
      console.log('move', this);
    })
    _privateProps.set(this, {
      radius: radius,
      radian: radian
    })
  }

  [_draw]() {
    console.log(this[_radius]);
  }

  paint() {
    _move.get(this)();
    console.log(_radian.get(this));
    console.log(_privateProps.get(this).radian);
  }

  get radian() {
    return _radian.get(this);
  }

  get radius() {
    return this[_radius];
  }
}

const c = new Circle(1, 'Hartes');


console.log(c.radian)
console.log(c.radius);
// console.log(Object.getOwnPropertyNames(c));
// console.log(Object.getOwnPropertySymbols(c));