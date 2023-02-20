// Import required class
const Circle = require('../utils/shapes.js');

// Create testing suite
describe('Circle', () => {
    describe('renderShape function', () => {
        it('Should render a shape dynamically with color', () => {
            const shape = new Circle();
            shape.renderShape('blue');
            expect(shape.renderShape()).toEqual(`<circle cx="150" cy="110" r="80" fill="${color}"/>`);
        });
    });
});