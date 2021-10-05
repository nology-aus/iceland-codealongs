// Testing
// What is testing?
// Why do we need to test?
// How do we test?
// What is jest?
// What is babel?
// What is TDD?
// Why is TDD useful?

// What is testing?
// Defining what the output of a function should be
// based on an input, multiple inputs

// sum function, parameter: 2 numbers
// sum(1, 1) => 2
// sum() => 0
// sum(7) => 7
// sum(3.124, 5.123) => something
// sum("123", "123") => Error
// sum({}, {}) => Error

// Why do we test?
// To make sure things work
// Define function behaviour
// So we can make changes safely
// Indirect, force us to write pure functions

// How do we test?
// Jest, (Javascript Test)
// Jest allows us to run *.test.js
// describe, test, it => structure of the test files
// expect, assertions, making sure functions have the right output

// What is babel?
// Javascript has lots of runtimes
// chrome (V8), 
// firefox (SpiderMonkey, Servo?), 
// safari (JavaScriptCore), 
// IE (Chakra),

// node.js (V8 Fork)
// deno (V8 Fork)

// Browser Runtimes:
import { thing } from "./file";
export const thing;

// Node.js
const { thing } = require("./file");
module.exports = { thing };

// App => Browser,
// Tests => Node.js

// Babel => Javascript Transpiler => Javascript -> Javascript
// Write code with import export, will work on browser
// babel will transpile our code to use require when running tests