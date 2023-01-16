const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    let engineer;

    beforeEach(() => {
        engineer = new Engineer('Jose Orozco', 6, 'josearozco15@gmail.com','itsnotjose');
    });

    test('getName() should return the name of the engineer', () => {
        expect(engineer.getName()).toBe('Jose Orozco');
      });
    
      test('getId() should return the id of the engineer', () => {
        expect(engineer.getId()).toBe(6);
      });
    
      test('getEmail() should return the email of the engineer', () => {
        expect(engineer.getEmail()).toBe('josearozco15@gmail.com');
      });

      test('getGithub() should return the github of the engineer',() => {
        expect(engineer.getGithub()).toBe('itsnotjose');
      });
    
      test('getRole() should return engineer info', () => {
        expect(engineer.getRole()).toBe('Engineer');
      });
});