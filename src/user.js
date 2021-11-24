class User {
    constructor(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
        this.payment = false;
    };

    assignToScooter() {
        return `This scooter has been assigned to ${this.name}!` 
    };

    makePayment() {
        return 'Payment has successfully resolved';
    };
};

const user1 = new User('janet smith', '11/24/91')
user1.makePayment()
user1.assignToScooter();

console.log(user1);
module.exports = User;