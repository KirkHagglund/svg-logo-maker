// Creating a parent class constructor for various shape child classes.
class Shapes {
  constructor(name) {
    this.name = name;
  };
  };
  
  class Circle extends Shapes {
    renderShape(color) {
      return `<circle cx="150" cy="110" r="80" fill="${color}"/>`
    };
  };
  
  class Square extends Shapes {
    renderShape(color) {
      return `<rect x="50" width"200" height="200" fill="${color}"/>`
    };
  };
  
  class Triangle extends Shapes {
    renderShape(color) {
      return `<polygon points="25,50 275,50 150,200" stroke="none" stroke-width="0" fill="${color}"/>`
    };
  };

module.exports = { Circle, Square, Triangle };