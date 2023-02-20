// Import required class
const Triangle = require('../utils/shapes.js');

// Create testing suite
describe('Triangle', () => {
    describe('renderShape function', () => {
        it('Should render a shape dynamically with color', () => {
            const shape = new Triangle();
            expect(shape.shapeRender()).toEqual(`<polygon points="25,50 275,50 150,200" stroke="none" stroke-width="0" fill="blue"/>`);
        });
    });
});