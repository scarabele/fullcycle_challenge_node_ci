class Calculator {
  sum(a, b) {
    return a + b;
  }
  minus(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
  sumOfArray(array) {
    return array.reduce((acc, curr) => acc + curr);
  }
  multiplyOfArray(array) {
    return array.reduce((acc, curr) => acc * curr);
  }
}

module.exports = Calculator;