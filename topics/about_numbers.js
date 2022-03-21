// module("About Numbers (topics/about_numbers.js)");
const { equal } = require('assert')
const { __, test } = require('../support/koans')

test("types", () => {
    const typeOfIntegers = typeof(6);
    const typeOfFloats = typeof(3.14159);
    equal(__, typeOfIntegers === typeOfFloats, 'are ints and floats the same type?');
    equal(__, typeOfIntegers, 'what is the javascript numeric type?');
    equal(__, 1.0, 'what is a integer number equivalent to 1.0?');
});

test("NaN", () => {
    const resultOfFailedOperations = 7/'apple';
    equal(__, Number.isNaN(resultOfFailedOperations), 'what will satisfy the equals assertion?');
    equal(__, resultOfFailedOperations == NaN, 'is NaN == NaN?');
});
