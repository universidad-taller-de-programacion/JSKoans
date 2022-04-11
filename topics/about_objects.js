// module("About Objects (topics/about_objects.js)");
const { equal } = require('assert')
const { ok, test } = require('../support/koans')

test("object type", () => {
    const empty_object = {};
    equal("object", typeof(empty_object), 'what is the type of an object?');
});

test("object literal notation", () => {
    const person = {
        name: "Amory Blaine",
        age: 102
    };
    equal("Amory Blaine", person.name, "what is the person's name?");
    equal(102, person.age, "what is the person's age?");
});

test("ES6 object literal notation", () => {
    const name = "Amory Blaine"
    const age = 102
    
    const person = {
        name,
        age
    };
    equal("Amory Blaine", person.name, "what is the person's name?");
    equal(102, person.age, "what is the person's age?");
});

test("dynamically adding properties", () => {
    const person = {};
    person.name = "Amory Blaine";
    person.age = 102;
    equal("Amory Blaine", person.name, "what is the person's name?");
    equal(102, person.age, "what is the person's age?");
}); 

test("adding properties from strings", () => {
    const person = {};
    person["name"] = "Amory Blaine";
    person["age"] = 102;
    equal("Amory Blaine", person.name, "what is the person's name?");
    equal(102, person.age, "what is the person's age?");
});

test("adding functions", () => {
    const person = {
        name: "Amory Blaine",
        age: 102,
        toString: function() {
            return this.name +" "+ this.age;  // HINT: use the 'this' keyword to refer to the person object.
        }
    };
    equal("Amory Blaine 102", person.toString(), "what should the toString function be?");
});
