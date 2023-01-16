const Intern = require('../lib/Intern')

describe('Intern', () => {
    let intern;

    beforeEach(() => {
        intern = new Intern('Jose Orozco', 6, 'josearozco15@gmail.com','UofU');
    });

    test('getName() should return the name of the intern', () => {
        expect(intern.getName()).toBe('Jose Orozco');
      });
    
      test('getId() should return the id of the intern', () => {
        expect(intern.getId()).toBe(6);
      });
    
      test('getEmail() should return the email of the intern', () => {
        expect(intern.getEmail()).toBe('josearozco15@gmail.com');
      });

      test('getSchool() should return the school of the intern',() => {
        expect(intern.getSchool()).toBe('UofU');
      });
    
      test('getRole() should return intern info', () => {
        expect(intern.getRole()).toBe('Intern');
      });
});