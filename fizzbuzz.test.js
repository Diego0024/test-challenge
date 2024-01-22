const fizzBuzz = require('./fizzBuzz');

test('devuelve Fizz cuando el número es divisible por 3', () => {
    expect(fizzBuzz(9)).toBe('Fizz');
    expect(fizzBuzz(12)).toBe('Fizz');
});

test('devuelve Buzz cuando el número es divisible por 5', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
    expect(fizzBuzz(25)).toBe('Buzz');
});

test('devuelve FizzBuzz cuando el número es divisible por 3 y 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
});

test('devuelve el número original cuando no es divisible por 3 ni por 5', () => {
    expect(fizzBuzz(7)).toBe(7);
    expect(fizzBuzz(11)).toBe(11);
});