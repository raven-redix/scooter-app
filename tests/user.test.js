const User = require('../src/user.js');

describe('user class', () => {
    const testUser = new User('Janet Duncan', '11/24/91');

    test('has a name', () => {
        
        expect(testUser.name).toBe('Janet Duncan')
    });
    test('has a dob', () => {
        const testUser = new User('Janet Duncan', '11/24/91');
        expect(testUser.birthDate).toBe('11/24/91');
    });
    test('assign to scooter method', () => {
        const testUser = new User('Janet Duncan', '11/24/91')
        testUser.assignToScooter();
        expect(testUser.assignToScooter()).toBe(`This scooter has been assigned to ${testUser.name}!`)
    });
    test('make payment method', () => {
        const testUser = new User('Janet Duncan', '11/24/91');
        testUser.makePayment();
        expect(testUser.makePayment()).toBe('Payment has successfully resolved')
    });
});