// Creating a parent class constructor for various shape child classes.
class Shapes {
    constructor(name) {
        this.name = name;
    };
  };
  
  class Circle extends Shapes {
    constructor(name, cx, cy, r) {
        super(name);
        this.valueOne = cx;
        this.valueTwo = cy;
        this.valueThree = r;
    };
  };
  
  class Square extends Shapes {
    constructor(name, x, width, height) {
      super(name);
      this.valueOne = x;
      this.valueTwo = width;
      this.valueThree = height;
    };
  };
  
  class Triangle extends Shapes {
    constructor(name, points, stroke, width) {
      super(name);
      this.valueOne = points;
      this.valueTwo = stroke;
      this.valueThree = width;
    };
  };

module.exports = Shapes;
module.exports = Circle;
module.exports = Square;
module.exports = Triangle;