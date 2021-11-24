class ChargingStation {
    static availableAtDocStation = [];
    constructor(location) {
        this.location = location;
        this.capacity = 10;
    };

    async charge() {
        console.log('Starting charge');

        await new Promise(resolve => setTimeout(resolve, 4000)); // wait 5 seconds

        console.log('Charge complete');   
   };
};

let c1 = new ChargingStation('Downtown');
c1.charge();
module.exports = ChargingStation;