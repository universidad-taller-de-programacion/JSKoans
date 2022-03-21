// module("About Truthyness (topics/about_truthyness.js)");
const { equal, deepEqual } = require('assert')
const { __, test } = require('../support/koans')

test("truthyness of positive numbers", () => {
    const oneIsTruthy = 1 ? true : false;
    equal(__, oneIsTruthy, 'is one truthy?');
});

test("truthyness of negative numbers", () => {
    const negativeOneIsTruthy = -1 ? true : false;
    equal(__, negativeOneIsTruthy, 'is -1 truthy?');
});

test("truthyness of zero", () => {
    const zeroIsTruthy = 0 ? true : false;
    equal(__, zeroIsTruthy, 'is 0 truthy?');
});

test("truthyness of null", () => {
    const nullIsTruthy = null ? true : false;
    equal(__, nullIsTruthy, 'is null truthy?');
});
