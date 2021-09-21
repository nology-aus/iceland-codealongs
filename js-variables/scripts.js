console.log("I'm linked properly");

// Objectives:
// How can we create variables?
// How can we change variables?
// What is the difference between const and let?
// Why we don't use var?

// How can we create variables?
// Const is immutable / not reassignable
const firstName = "calum";
// I can re-assign
const lastName = "hill-cawthorne";

console.log(typeof firstName);

console.log(firstName);
console.log(lastName);
console.log("Fullname", firstName + " " + lastName);

// let is mutable, is reassignable
let age = 23;
console.log("Intial Value", age);

age = 24;
console.log("Value after re-assignment", age);

console.log(
    "Hi, my name is" +
        " " +
        firstName +
        " " +
        lastName +
        " " +
        "and I am" +
        " " +
        age +
        " " +
        "years old"
);

console.log(
    `Hi, my name is ${firstName} ${lastName} and I am ${age} years old`
);
