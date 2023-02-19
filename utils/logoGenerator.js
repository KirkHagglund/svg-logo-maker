// Importing required shape classes 

const Shapes = require('./shapes.js');
const Circle = require('./shapes.js');
const Square = require('./shapes.js');
const Triangle = require('./shapes.js');

// Declaring new vaiables for each shape

const circle = new Circle('circle', 'cx="150"', 'cy="110"', 'r="80"');
const square = new Square('rect', 'x="50"', 'width="200"', 'height="200"');
const triangle = new Triangle('polygon', 'points="25,50 275,50 150,200"', 'stroke="none"', 'stroke-width="0"');

function logoGenerator(data) {

  let shapeResult = '';
  if (data.shape === 'circle') {
      shapeResult = circle;
  } else if (data.shape === 'square') {
      shapeResult = square;
  } else {
      shapeResult = triangle;
  };

  console.log('Generated logo.svg');

    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${shapeResult.name} ${shapeResult.valueOne} ${shapeResult.valueTwo} ${shapeResult.valueThree} fill="${data.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textcolor}">${data.letters}</text>

</svg>
  
  `;
  };
  
  
  module.exports = logoGenerator;