// module("About Strings (topics/about_strings.js)");
const { equal } = require('assert')
const { __, test } = require('../support/koans')

test("delimiters", () => {
    const singleQuotedString = 'apple';
    const doubleQuotedString = "apple";
    equal(__, singleQuotedString === doubleQuotedString, 'are the two strings equal?');
});

test("concatenation", () => {
    const fruit = "apple";
    const dish = "pie";
    equal(__, fruit + " " + dish, 'what is the value of fruit + " " + dish?');
});

test("character Type", () => {
    const characterType = typeof("Amory".charAt(1)); // typeof will be explained in about reflection
    equal(__, characterType, 'Javascript has no character type');
});

test("escape character", () => {
    const stringWithAnEscapedCharacter  = "\u0041pple";
    equal(__, stringWithAnEscapedCharacter, 'what  is the value of stringWithAnEscapedCharacter?');
});

test("string.length", () => {
    const fruit = "apple";
    equal(__, fruit.length, 'what is the value of fruit.length?');
});

test("slice", () => {
    const fruit = "apple pie";
    equal(__, fruit.slice(0,5), 'what is the value of fruit.slice(0,5)?');
});
