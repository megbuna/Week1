const { check, runTest } = require("../../test-api");

function getLength(string) {
  // return the length of the passed string
  return string.length
}

runTest("getLength() returns the correct string length", function () {
  check(getLength("jonny")).isEqualTo(5);
  check(getLength("jd")).isEqualTo(2);
  check(getLength("rosa")).isEqualTo(4);
});
