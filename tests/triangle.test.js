// Import required class
const { Circle, Square, Triangle } = require('../utils/shapes');

// Create testing suite
describe('Triangle', () => {
    describe('renderShape function', () => {
        it('Should render a shape dynamically with color blue', () => {
            const shape = new Triangle();
            color = 'blue';
            expect(shape.renderShape(color)).toEqual(`<polygon points="25,50 275,50 150,200" stroke="none" stroke-width="0" fill="${color}"/>`);
        });
    });
});