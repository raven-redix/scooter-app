const ChargingStation = require('../charging-station');

describe('chargingStation class', () => {
//jest.setTimeout(50000); use this for tsting if the time you're using is longer than allowed
const testCharge = new ChargingStation('Downtown');


  test('has a location', () => {
    
    expect(testChEarge.location).toBe('Downtown');
  });


  test("charge method", async () => {
    
    await testScooter.charge(); 
    console.log("Test complete");
  });



});