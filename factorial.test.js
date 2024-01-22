const calcularFactorial = require('./factorial');

test('calcula el factorial de 5', () => {
  expect(calcularFactorial(5)).toBe(120);
});

test('calcula el factorial de 0', () => {
  expect(calcularFactorial(0)).toBe(1);
});

test('calcula el factorial de 1', () => {
  expect(calcularFactorial(1)).toBe(1);
});
