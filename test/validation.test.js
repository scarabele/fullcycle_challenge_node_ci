const Validator = require('../src/validator');
const validator = new Validator();

test("Should check email henrique@123 is invalid", function () {
  expect(validator.email('henrique@123')).toBeFalsy();
});

test("Should check email henrique@test.com is valid", function () {
  expect(validator.email('henrique@test.com')).toBeTruthy();
});

test("Should check password 123 is invalid", function () {
  expect(validator.password('123')).toBeFalsy();
});

test("Should check password 12345678 is valid", function () {
  expect(validator.password('A123@56a7')).toBeTruthy();
});

test("Should check phone 1123456783 is valid", function () {
  expect(validator.phone('1123456783')).toBeTruthy();
});