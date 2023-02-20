// Importing required shape classes 
const { Circle, Square, Triangle } = require('./shapes.js');


function logoGenerator(data) {

  let shapeResult = '';
  if (data.shape === 'circle') {
      shapeResult = new Circle();
  } else if (data.shape === 'square') {
      shapeResult = new Square();
  } else {
      shapeResult = new Triangle();
  };

  console.log('Generated logo.svg');

    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${shapeResult.renderShape(data.color)}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textcolor}">${data.letters}</text>

</svg>
  
  `;
  };
  
  
  module.exports = logoGenerator;