const Scooter = require('../src/scooter');

describe('user class', () => {

  const testScooter = new Scooter('Downtown', '37D', true, true);

  test('has a location', () => {
    
    expect(testScooter.location).toBe('Downtown');

  });

  test('has an id', () => {
    
    expect(testScooter.id).toBe('37D');

  });

  test('is charged', () => {
    expect(testScooter.charge).toBe(true);
  });

  test('is docked', () => {
    expect(testScooter.docked).toBe(true);
  });

  test("unCharge method", async () => {
    
    await testScooter.unCharge(); 
    console.log("Test complete");
  });

  test('is marked as broken', () => {
    expect(testScooter.markAsBroken()).toBe('This scooter is broken')
  });

  test('dock method', () => {
    expect(testScooter.dock()).toBe('Scooter 37D has been docked!')
  });


});