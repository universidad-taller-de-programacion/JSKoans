// module("About Objects (topics/about_objects.js)");
const { equal } = require('assert')
const { __, test } = require('../support/koans')

test("object type", () => {
    const empty_object = {};
    equal(__, typeof(empty_object), 'what is the type of an object?');
});

test("object literal notation", () => {
    const person = {
        __: __,
        __: __
    };
    equal("Amory Blaine", person.name, "what is the person's name?");
    equal(102, person.age, "what is the person's age?");
});

test("ES6 object literal notation", () => {
    const __ = "Amory Blaine"
    const __ = 102
    
    const person = {
        __,
        __
    };
    equal("Amory Blaine", person.name, "what is the person's name?");
    equal(102, person.age, "what is the person's age?");
});

test("dynamically adding properties", () => {
    const person = {};
    person.__ = "Amory Blaine";
    person.__ = 102;
    equal("Amory Blaine", person.name, "what is the person's name?");
    equal(102, person.age, "what is the person's age?");
}); 

test("adding properties from strings", () => {
    const person = {};
    person["__"] = "Amory Blaine";
    person["__"] = 102;
    equal("Amory Blaine", person.name, "what is the person's name?");
    equal(102, person.age, "what is the person's age?");
});

test("adding functions", () => {
    const person = {
        name: "Amory Blaine",
        age: 102,
        toString: function() {
            return __;  // HINT: use the 'this' keyword to refer to the person object.
        }
    };
    equal("I Amory Blaine am 102 years old.", person.toString(), "what should the toString function be?");
});
