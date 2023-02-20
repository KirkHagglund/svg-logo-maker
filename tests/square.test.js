// Import required class
const { Circle, Square, Triangle } = require('../utils/shapes');

// Create testing suite
describe('Square', () => {
    describe('renderShape function', () => {
        it('Should render a shape dynamically with color', () => {
            const shape = new Square();
            color = 'blue';
            expect(shape.renderShape(color)).toEqual(`<rect x="50" width"200" height="200" fill="${color}"/>`);
        });
    });
});