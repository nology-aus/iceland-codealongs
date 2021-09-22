// Booleans

// Boolean Type
true;
false;

// Boolean Expressions
// Starting with non-booleans
// Outputing a boolean

// Greater than
console.log("Greater than", 5 > 3); //
// Less than
console.log("Less Than", 3 < 5);
// Greater than equal to
console.log("GTE", 5 >= 5);
// Less than or equal to
console.log("LTE", 5 <= 5);
// equals (==, ===)
console.log("Strict EQ", 6 === 7);
console.log("Strict EQ", 5 === 5);
console.log("Strict EQ", "calum" === "Calum");

console.log("Lower Case c", "c".charCodeAt(0));
console.log("Upper Case C", "C".charCodeAt(0));

console.log("Strict EQ", 7 === "7");
console.log("EQ", 7 == "calum");
console.log("EQ", 7 == 7);
// not equals (!=, !==)
console.log("NEQ", 7 !== 7);
console.log("NEQ", 7 !== "7");
console.log("NEQ", 7 != "7");

const left = 123;
const right = "123";

console.log(left == right); // 123 == "123", 123 == 123, true
console.log(left === right); // 123 == "123", false

// AND
5 > 2;
2 === 2;

console.log(5 > 2 && 2 === 2); // true && true => true
console.log(5 > 2 && 2 === "2"); // true && false => false
console.log(2 > 1 && 3 > 1 && 4 > 1 && false); // true && true && true && false => false

console.log(false && 2 > 1 && 3 > 1 && 4 > 1); // false
console.log(2 > 1 && false && 3 > 1 && 4 > 1); // false

// OR => AND/OR
console.log(5 > 2 || 2 === 2); // true
console.log(5 > 2 || 2 === "2"); // true
console.log(2 === "2" || 5 > 2); // false || true => true

// Boolean Types
true;
false;

// Falsey Values
0;
undefined;

let myVariable;
console.log(typeof myVariable);
