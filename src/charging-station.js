import Scooter from './scooter';

class ChargingStation {
    static availableAtDocStation = [];
    constructor(location) {
        this.location = location;
        this.capacity = 10;
    };

    async charge() {
        console.log('Starting charge');

        await new Promise(resolve => setTimeout(resolve, 5000)); // wait 5 seconds

        console.log('Charge complete');   
   };
};

let c1 = new ChargingStation('Downtown');
c1.charge();
export default ChargingStation;