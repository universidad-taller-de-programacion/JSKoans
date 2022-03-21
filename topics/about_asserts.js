// module("About Asserts (topics/about_asserts.js)");
const { ok, equal } = require('assert')
// const { __, test } = require('../support/koans')
const koans = require('../support/koans')
// const __ = koans.__
// const test = koans.test
const { __ } = koans
const { test } = koans

test("ok", () => {
    assert.ok(__ === true, 'what will satisfy the ok assertion?');
})

test("not ok", () => {
    assert.ok(__ === false, 'what is a false value?');
})

test("ok", () => {
    assert.equal(__, 1 + 1, 'what will satisfy the equal assertion?');
})