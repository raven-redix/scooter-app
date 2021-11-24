class Scooter {
    static available = [];
    static unavailable = [];

    constructor(location, id) {
        this.location = location;
        this.id = id;
        this.isCharged = true;
        this.isDocked = true;
        //this.assign = assign;
        //this.status = status;
    };

    async unCharge() {
        console.log('Battery depleting!');

        await new Promise(resolve => setTimeout(resolve, 4000)); // wait 40 seconds

        console.log('Please return this scooter and connect it to chargin station!');   
   };

    markAsBroken() {
        return 'This scooter is broken';
    };

    dock() {
        return `Scooter ${this.id} has been docked!`
    };
};

module.exports = Scooter;