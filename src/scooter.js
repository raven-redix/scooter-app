class Scooter {
    static available = [];
    static unavailable = [];

    constructor(location, id, assign) {
        this.location = location;
        this.id = id;
        this.isCharged = true;
        this.isDocked = true;
        this.assign = assign;
        this.status = 
    };

    async uncharge() {
        console.log('Battery depleting!');

        await new Promise(resolve => setTimeout(resolve, 40000)); // wait 40 seconds

        console.log('Please return this scooter and connect it to chargin station!');   
   };

    markAsBroken() {
        return //user should be able to call this method to report a scooter as being broken, pushing 
        to the unavailable array
    };

    dock() {
        return ''
    };
};

module.exports = Scooter;