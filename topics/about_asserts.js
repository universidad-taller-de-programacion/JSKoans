// module("About Asserts (topics/about_asserts.js)");
const assert = require('assert')
const { __, test } = require('../support/koans')

test("ok", () => {
    assert.ok(true === true, 'what will satisfy the ok assertion?');
})

test("not ok", () => {
    assert.ok(__ === false, 'what is a false value?');
})

test("ok", () = {
    assert.equal(__, 1 + 1, 'what will satisfy the equal assertion?');
})