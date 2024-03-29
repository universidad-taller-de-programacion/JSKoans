// module("About Arrays (topics/about_arrays.js)");
const { equal, deepEqual } = require('assert')
const { __, test } = require('../support/koans')

test("array literal syntax and indexing", () => {
    const favouriteThings = ["cellar door", 42, true]; // note that array elements do not have to be of the same type
    equal(__, favouriteThings[0], 'what is in the first position of the array?');
    equal(__, favouriteThings[1], 'what is in the second position of the array?');
    equal(__, favouriteThings[2], 'what is in the third position of the array?');
});

test("array type", () => {
    equal(__, typeof([]), 'what is the type of an array?');
});

test("length", () => {
    const collection = ['a','b','c'];
    equal(__, collection.length, 'what is the length of the collection array?');
});

test("splice", () => {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const workingWeek = daysOfWeek.splice(__, __);
    const weekend = daysOfWeek;

    deepEqual(workingWeek, ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], 'what is the value of workingWeek?');
    deepEqual(weekend, ['Saturday', 'Sunday'], 'what is the value of weekend?');
});

test("stack methods", () => {
    const stack = [];
    stack.push("first");
    stack.push("second");

    equal(__, stack.pop(), 'what will be the first value popped off the stack?');
    equal(__, stack.pop(), 'what will be the second value popped off the stack?');
});

test("queue methods", () => {
    const queue = [];
    queue.push("first");
    queue.push("second");
    queue.unshift("third");

    equal(__, queue.shift(), 'what will be shifted out first?');
    equal(__, queue.shift(), 'what will be shifted out second?');
});
