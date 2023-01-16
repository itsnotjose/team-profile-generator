const Employee = require('../lib/Employee');


describe('Employee', () => {
  let employee;

  beforeEach(() => {
    employee = new Employee('Jose Orozco', 6, 'josearozco15@gmail.com');
  });

  test('getName() should return the name of the employee', () => {
    expect(employee.getName()).toBe('Jose Orozco');
  });

  test('getId() should return the id of the employee', () => {
    expect(employee.getId()).toBe(6);
  });

  test('getEmail() should return the email of the employee', () => {
    expect(employee.getEmail()).toBe('josearozco15@gmail.com');
  });

  test('getRole() should return Employee info', () => {
    expect(employee.getRole()).toBe('Employee');
  });
});
