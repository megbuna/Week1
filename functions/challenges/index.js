const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges you are expected to declare your own function with the name and suggested behaviour provided.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

/*
modulo()

This function should take two arguments a and b, and return the remainder of the division of a / b
*/
function modulo(a,b) {
  return a%b
}

runTest("modulo() returns the correct remainder", function () {
  check(modulo(10, 2)).isEqualTo(0);
  check(modulo(119, 10)).isEqualTo(9);
  check(modulo(50, 6)).isEqualTo(2);
});

/*
squareRoot()

This function should take a single argument and return its square root
*/
function squareRoot(num) {
  return Math.sqrt(num);
}
runTest("squareRoot() returns the square root of a positive integer", function () {
  check(squareRoot(100)).isEqualTo(10);
  check(squareRoot(25)).isEqualTo(5);
  check(squareRoot(121)).isEqualTo(11);
});

/*
raiseToPower()

This function should take two arguments, m and n, and return m raised to the power of n
*/
function raiseToPower(m,n) {
  return Math.pow(m,n);
}
runTest("raiseToPower() raises given number to the given power", function () {
  check(raiseToPower(10, 3)).isEqualTo(1000);
  check(raiseToPower(25, 2)).isEqualTo(625);
  check(raiseToPower(10, 0)).isEqualTo(1);
});

/*
capitaliseFirstLetter()

This function should take a string as an argument and return the same string with the first letter capitalised
*/

function capitaliseFirstLetter(str) {
  return str.substring(0,1).toUpperCase() + str.substring(1);
}
runTest("capitaliseFirstLetter() capitalises the first letter in a string", function () {
  check(capitaliseFirstLetter("bang")).isEqualTo("Bang");
  check(capitaliseFirstLetter("apple")).isEqualTo("Apple");
  check(capitaliseFirstLetter("coding")).isEqualTo("Coding");
});

/*
areValuesEqual()

This function should take two arguments and return true if they are *strictly* equal, and false otherwise

NOTE: you can complete this problem without resorting to if statements!
*/
function areValuesEqual(a,b){
  return Boolean(a === b);
}
runTest("areValuesEqual() checks if two values are strictly equal", function () {
  check(areValuesEqual(10, 10)).isEqualTo(true);
  check(areValuesEqual("hello", "hello")).isEqualTo(true);
  check(areValuesEqual("good", "bad")).isEqualTo(false);
  check(areValuesEqual("10", 10)).isEqualTo(false);
});

/*
isFromThe60s()

This function should take a number as an argument representing a year, and return true if that year is in the 1960s and false otherwise

NOTE: you can complete this problem without resorting to if statements!
*/
function isFromThe60s(year) {
  parseInt(year);
  return (year >= 1960 && year < 1970)
  }


runTest("isFromThe60s() checks if a number is within 1960 to 1969 (inclusive)", function () {
  check(isFromThe60s(1962)).isEqualTo(true);
  check(isFromThe60s(1965)).isEqualTo(true);
  check(isFromThe60s(1970)).isEqualTo(false);
  check(isFromThe60s(1960)).isEqualTo(true);
  check(isFromThe60s(1959)).isEqualTo(false);
  check(isFromThe60s(1901)).isEqualTo(false);
  check(isFromThe60s(1990)).isEqualTo(false);
});

/*
isEvenLength()

This function should take a string as an argument and return true if its length is even, and false otherwise
*/
function isEvenLength(str) {
  return str.length%2 === 0;
}
runTest("isEvenLength() checks if string has even number of characters", function () {
  check(isEvenLength("hello")).isEqualTo(false);
  check(isEvenLength("northcoders")).isEqualTo(false);
  check(isEvenLength("abcd")).isEqualTo(true);
  check(isEvenLength("even")).isEqualTo(true);
});

/*
isAbsolutePath()

This function should take a string as an argument representing a file path and return true if it is an absolute path, and false otherwise

HINT: all absolute file paths start with a /
*/
function isAbsolutePath(str) {
  return str.startsWith("/");
}

runTest("isAbsolutePath() checks if a file path is absolute or relative", function () {
  check(isAbsolutePath("/Users/mitch")).isEqualTo(true);
  check(isAbsolutePath("/Users/mitch/northcoders/remote_course/remote_precourse_1")).isEqualTo(true);
  check(isAbsolutePath("../composers")).isEqualTo(false);
  check(isAbsolutePath("./applications/my-awesome-app.js")).isEqualTo(false);
});
function getMiddle(str) {
  var position;
  var length;

  if(str.length % 2 == 1) {
      position = str.length / 2;
      length = 1;
  } else {
      position = str.length / 2 - 1;
      length = 2;
  }

  return str.substring(position, position + length)
}
/*
getMiddle()

This function should take a string as an argument and return the middle (or middle two) character(s) of that string

NOTE: you could use the ternary operator for this challenge
*/

runTest("getMiddle() returns the middle character in a string of odd length", function () {
  check(getMiddle("abc")).isEqualTo("b");
  check(getMiddle("mitch")).isEqualTo("t");
});

runTest("getMiddle() returns the middle characters in a string of even length", function () {
  check(getMiddle("abcd")).isEqualTo("bc");
  check(getMiddle("blob")).isEqualTo("lo");
});

/*
getCharCode()

This function should take a string as an argument and return a string which describes the ASCII code of that character

The returned string should be in the following format:

"The ASCII code for <character> is <character-code>"
*/

skipTest("getCharCode() will return a message stating the ASCII code of a passed char", function () {
  check(getCharCode("A")).isEqualTo("The ASCII code for A is 65");
  check(getCharCode("b")).isEqualTo("The ASCII code for b is 98");
  check(getCharCode("z")).isEqualTo("The ASCII code for z is 122");
  check(getCharCode("k")).isEqualTo("The ASCII code for k is 107");
  check(getCharCode("!")).isEqualTo("The ASCII code for ! is 33");
  check(getCharCode("M")).isEqualTo("The ASCII code for M is 77");
});

/*
createPercentage()

This function should take two numbers, a and b, and return a string representing the value of a as a percentage of b
*/
 
function createPercentage(a,b) {
  let percentage = Math.round((a/b)*100);
  return percentage + "%";
}

runTest('createPercentage() creates a percentage string in the form "--%"', function () {
  check(createPercentage(1, 2)).isEqualTo("50%");
  check(createPercentage(50, 100)).isEqualTo("50%");
  check(createPercentage(2, 3)).isEqualTo("67%");
  check(createPercentage(3, 4)).isEqualTo("75%");
  check(createPercentage(1, 7)).isEqualTo("14%");
});

/*
extractNumber()

This function should take a string containing a number wrapped in a pair of round brackets  and return said number
*/
function extractNumber(str) {
  let code = /\d+/
  return parseInt()

}
runTest("extractNumber() should return the number buried inside a string", function () {
  check(extractNumber("lasjdasasj(123)asljdlajk")).isEqualTo(123);
  check(extractNumber("qwasdaoyer(44687)iuwyeibasdahgsd")).isEqualTo(44687);
  check(extractNumber("qwasdasdfsyer(19827)iusdfsdfsd")).isEqualTo(19827);
  check(extractNumber("qwasdasdfsyer(5601)iusdfsdfsd")).isEqualTo(5601);
  check(extractNumber("qwasdasdfsyer(29)iusdfsdfsd")).isEqualTo(29);
});
