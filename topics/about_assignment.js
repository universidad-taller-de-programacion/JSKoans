// module("About Assignment (topics/about_assignment.js)");
const { equal } = require('assert')
const { __, test } = require('../support/koans')

test("local variables", () => {
    const temp = __;
    equal(temp, 1, "Assign a value to the variable temp");
});

test("global variables", () => {
    temp = 1; // Not using var is an example. Always use var in practise.
    equal(global.__, temp, 'global variables are assigned to the global object');
});
