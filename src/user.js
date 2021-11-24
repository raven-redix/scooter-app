import Scooter from './scooter';
class User {
    constructor(name, birthdate) {
        this.name = name;
        this.birthdate = birthdate;
        this.payment = false;
    };

    assignToScooter() {
        return `This scooter has been assigned to ${this.name}!` 
        /*async function uncharge() {
            console.log('Battery depleting!');
    
            await new Promise(resolve => setTimeout(resolve, 40000)); // wait 40 seconds
    
            console.log('Please return this scooter and connect it to chargin station!');   
       };*/
    };

    makePayment() {
        if (this.payment === false) {
            //let this.payment = true;

        };
        console.log('Thank you for your payment');
    };
};

const user1 = new User('janet smith', '11/24/91')
user1.makePayment()
user1.assignToScooter();

console.log(user1);
export default User;