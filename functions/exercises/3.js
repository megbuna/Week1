const { check, runTest } = require("../../test-api");

function multiply(a,b) {
  // return the product of two passed numbers
  return a*b;
}

runTest("multiply() can multiply 2 numbers together", function () {
  check(multiply(10, 42)).isEqualTo(420);
  check(multiply(3, 5)).isEqualTo(15);
  check(multiply(-180, 2)).isEqualTo(-360);
});
