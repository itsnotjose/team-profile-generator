
const Manager = require('../lib/Manager');


describe('Manager', () => {
    let manager;

    beforeEach(() => {
        manager = new Manager('Jose Orozco', 6, 'josearozco15@gmail.com', 120);
    });

    test('getName() should return the name of the manager', () => {
        expect(manager.getName()).toBe('Jose Orozco');
      });
    
      test('getId() should return the id of the manager', () => {
        expect(manager.getId()).toBe(6);
      });
    
      test('getEmail() should return the email of the manager', () => {
        expect(manager.getEmail()).toBe('josearozco15@gmail.com');
      });

      test('getOfficeNumber() should return the office number',() => {
        expect(manager.getOfficeNumber()).toBe(120);
      });
    
      test('getRole() should return manager info', () => {
        expect(manager.getRole()).toBe('Manager');
      });
});