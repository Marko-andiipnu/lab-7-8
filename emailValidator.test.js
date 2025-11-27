const { isValidEmail } = require('./emailValidator');

describe('Email Validator', () => {
  test('valid email returns true', () => {
    expect(isValidEmail('user@example.com')).toBe(true);
  });

  test('invalid email returns false', () => {
    expect(isValidEmail('invalid-email')).toBe(false);
  });

  test('mock example', () => {
    const mockFn = jest.fn(() => true);

    expect(mockFn('any@email.com')).toBe(true);
    expect(mockFn).toHaveBeenCalledWith('any@email.com');
  });
});
