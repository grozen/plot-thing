import xs from 'xstream';
import {rect} from 'cycle-canvas';

class Circle {
  static forCanvas(x, y, radius, color) {
    rect({
      x: this.x,
      y: this.y,
      width: radius,
      height: radius,
      draw: {
        fill: color
      }
    })
  }
}
