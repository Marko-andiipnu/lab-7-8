const Calculator = require('./calculator');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  test('add two numbers', () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test('divide two numbers', () => {
    expect(calc.divide(10, 2)).toBe(5);
  });

  test('divide by zero throws error', () => {
    expect(() => calc.divide(5, 0)).toThrow('Cannot divide by zero');
  });
});
