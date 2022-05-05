const Calculator = require("../src/calculator");
const calculator = new Calculator();

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.sum(1, 2)).toBe(3);
});

test('subtracts 3 - 1 to equal 2', () => {
  expect(calculator.minus(3, 1)).toBe(2);
});

test('multiplies 2 * 2 to equal 4', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test('divides 4 / 2 to equal 2', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('adds array of numbers to equal 6', () => {
  expect(calculator.sumOfArray([1, 2, 3])).toBe(6);
});

test('multiplies array of numbers to equal 12', () => {
  expect(calculator.multiplyOfArray([2, 2, 3])).toBe(12);
});