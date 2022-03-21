// module("About Operators (topics/about_operators.js)");
const { equal } = require('assert')
const { __, test } = require('../support/koans')

test("addition", () => {
  let result = 0;
  //starting i at 0, add i to result and increment i by 1 until i is equal to 5
  for (let i = 0; i <= 5; i++) {
    result = result + i;
  }
  equal(__, result, "What is the value of result?");
});

test("assignment addition", () => {
  let result = 0;
  for (let i = 0; i <=5; i++) {
    //the code below is just like saying result = result + i; but is more concise
    result += i;
  }
  equal(__, result, "What is the value of result?");
});

test("subtraction", () => {
  let result = 5;
  for (let i = 0; i <= 2; i++) {
    result = result - i;
  }
  equal(__, result, "What is the value of result?");
});

test("assignment subtraction", () => {
  let result = 5;
  for (let i = 0; i <= 2; i++) {
    result -= i;
  }
  equal(__, result, "What is the value of result?");
});

//Assignment operators are available for multiplication and division as well
//let's do one more, the modulo operator, used for showing division remainder

test("modulus", () => {
  let result = 10;
  let x = 5;
  //again this is exactly the same as result = result % x
  result %= x;
  equal(__, result, "What is the value of result?");
});
