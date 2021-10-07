console.log("I'm linked up properly");

// Arithmetic Operators
// Additions => +
// Subtraction => -
// Multiplication => *
// Division => /
// pow => ** => 2 ** 2 => 4
// Decrement / Increment, -- / ++
// Remainder => %

// Addition
console.log(1 + 3); // 4
console.log(1.123 + 51.213); // something
console.log("Calum" + " " + "Hill"); //

console.log(1 + true); // true => 1, 2
console.log(2 + false); // false => 0, 2

// Subtraction
console.log(3 - 2); // 1
console.log("3" - 2); // 1
console.log("3" - "2"); // 1
console.log(1 - -2); // 3

console.log(10 - true); // 9
console.log(10 + false); // 10

// Multiplication
console.log(2 * 4); // 8
console.log("10" * 2); // 20
console.log("10" * "3"); // 30

console.log(10 * true); // 10
console.log(6 * false); // 0

// Division
console.log(10 / 5); // 2
console.log("30" / 2); // 15
console.log("calum" / 3); // NaN

console.log(10 / (true * 2)); // 5

// nth powers
console.log(2 ** 2); // 4
console.log(5 ** 10); // something

// Incrementing and Decrementing
let n = 100;
--n; // Decrement before use
n--; // Decrement after use
++n; // Increment before use
n++; // Increment after use

let i = 10;
console.log(10 * i--); // 10 * 10 => 100
console.log(10 * i); // 10 * 9 => 90

// Modulus ?
console.log(5 % 2); // 1
console.log(97 % 9); // 7

const number = 100;
console.log(number % 2 === 0);

// Assignment Operators
let value = 124 / 2; // 62

value /= 2; // value = value / 2;
console.log(value);
value -= 1; // value = value - 1;
console.log(value);
value *= 3; // value = value * 3;
console.log(value);
value += 10; // value = value + 10;
console.log(value);
value **= 2; // value = value ** 2;
console.log(value);
