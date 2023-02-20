// Import required class
const Square = require('../utils/shapes.js');

// Create testing suite
describe('Square', () => {
    describe('renderShape function', () => {
        it('Should render a shape dynamically with color', () => {
            const shape = new Square();
            expect(shape.shapeRender()).toEqual(`<rect x="50" width"200" height="200" fill="blue"/>`);
        });
    });
});