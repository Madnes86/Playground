const sum = require('./memorize.cjs');

test('sum', () => {
    expect(sum(2, 3)).toBe(5);
});