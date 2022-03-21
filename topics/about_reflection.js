// module("About Reflection (topics/about_reflection.js)");
const { equal, deepEqual, ok } = require('assert')
const { __, test } = require('../support/koans')

function A() {
    this.aprop = "A";
};

function B() {
    this.bprop = "B";
};

B.prototype = new A();

test("typeof", () => {
    equal(__, typeof({}), 'what is the type of an empty object?');
    equal(__, typeof('apple'), 'what is the type of a string?');
    equal(__, typeof(-5), 'what is the type of -5?');
    equal(__, typeof(false), 'what is the type of false?');
});

test("property enumeration", () => {
    const keys = [];
    const values = [];
    const person = { 
        name: 'Amory Blaine', 
        age: 102, 
        unemployed: true
    };

    for(let propertyName in person) {
        keys.push(propertyName);
        values.push(person[propertyName]);
    }

    ok(keys.equalTo(['__','__','__']), 'what are the property names of the object?');
    ok(values.equalTo(['__',__,__]), 'what are the property values of the object?');
});

test("hasOwnProperty", () => {
    const b = new B();

    const keys = [];
    for (let propertyName in b) {
        keys.push(propertyName);
    }
    equal(__, keys.length, 'how many elements are in the keys array?');
    deepEqual([__, __], keys, 'what are the properties of the array?');

    // hasOwnProperty returns true if the parameter is a property directly on the object,
    // but not if it is a property accessible via the prototype chain.
    const ownKeys = [];
    for(let propertyName in b) {
        if (b.hasOwnProperty(propertyName)) {
            ownKeys.push(propertyName);
        }
    }
    equal(__, ownKeys.length, 'how many elements are in the ownKeys array?');
    deepEqual([__], ownKeys, 'what are the own properties of the array?');
});

test("constructor property", () => {
    const a = new A();
    const b = new B();
    equal(__, typeof(a.constructor), "what is the type of a's constructor?");
    equal(__, a.constructor.name, "what is the name of a's constructor?");
    equal(__, b.constructor.name, "what is the name of b's constructor?");
});

test("eval", () => {
    // eval executes a string
    let result = "";
    eval("result = 'apple' + ' ' + 'pie'");
    equal(__, result, 'what is the value of result?');
});
