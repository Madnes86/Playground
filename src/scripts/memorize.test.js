const sum = require('./memorize');

test('sum', () => {
    expect(sum(2, 3)).toBe(5)
})