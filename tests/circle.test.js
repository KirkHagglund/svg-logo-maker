// Import required class
const { Circle, Square, Triangle } = require('../utils/shapes');

// Create testing suite
describe('Circle', () => {
    describe('renderShape function', () => {
        it('Should render a shape dynamically with color', () => {
            const shape = new Circle();
            color = 'blue';
            expect(shape.renderShape(color)).toEqual(`<circle cx="150" cy="110" r="80" fill="${color}"/>`);
        });
    });
});