const User = require('./user')

describe('user class', () => {
    test('has a name', () => {
        const testUser = new User('Janet Duncan');
        expect(testUser.name).toBe('Janet Duncan')
    });
});