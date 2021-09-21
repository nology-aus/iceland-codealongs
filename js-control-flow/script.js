console.log("I am linked to the HTML file");

// Control Flow / Conditional Statements

// Ternary
// SWITCH

// IF / ELSE statements

//  Syntax
//  if (expression) {
//      This is what is going to happen if expression is true
//  } else {
//      This is what is going to happen if the expression is false
//  }

const x = "Remi";
if (x) {
    console.log("x is a truthy value");
} else {
    console.log("x is not a truthy value");
}

const priceOfCheese = 10;
const maxPrice = 15;
if (priceOfCheese > 10) {
    console.log("This is good cheese");
} else {
    console.log("This is bad cheese");
}

// ELSE IF STATEMENTS
//  Syntax
//  if (first expression to check) {
//      This is what is going to happen if first expression is true
//  } else if {
//      This is what is going to happen if the second expression is true
//  } else {
//      this is what is going to happen if neither of the first two expressions are true
//  }

const temp = 45;

if (temp <= 0) {
    console.log("Stay at Home");
} else if (temp <= 10) {
    console.log("Wear a big coat");
} else if (temp <= 20) {
    console.log("Wear a hoodie");
} else if (temp <= 40) {
    console.log("Wear shorts and flip flops");
} else {
    console.log("Stay inside, put AC on");
}

const errorCode = 1; // errorCode 1, 2, 3 , if 0 it means success

// if errorCode = 0 >> evaluated to falsey
// >> !false == true

if (!errorCode) {
    // because errorCode is 0 > falsey > !0 is true
    console.log("Success");
} else if (errorCode === 1) {
    // if errorCode is equal to 1, this evaluates to true
    console.log("File path broken"); // this block of code is going to be executed
} else if (errorCode === 2) {
    console.log("Page Not Found");
} else if (errorCode === 3) {
    console.log("Syntax error");
} else {
    console.log("Error code not valid");
}

// ELSE IF CHALLENGE
// Check for the smallest value
// 1. Create two variables `x` & `y`
// 2. Write an if / else block
// 3. It should compare a number `x` to another number `y`
// 4. It should print (“`x` is greater than `y`“) in the console
// 5. Or “`x` is smaller than `y`”
// 6. Or “`x` is equal to `y`”
// 7. Depending on the value of `x` and `y`

let firstValue = 100;
let secondValue = 10;

if (firstValue > secondValue) {
    ++firstValue;
    console.log(`${firstValue}`);
} else {
    console.log("My expression was false");
}

let falseyValue = 0;

if (!falseyValue) {
    console.log("My value is falsey");
}
