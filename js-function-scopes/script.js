// SCOPES IN JS

// IF Block scopes

if (true) {
    let myThing = "This is my thing";
    console.log("Inside my IF block", myThing);
}

// console.log(myThing); Uncaught ReferenceError: myThing is not defined

// Function Scopes

function circleArea(radius) {
    const area = Math.PI * radius ** 2;
    return area;
}

const circleAreaArrowFunction = (radius) => {
    const area = Math.PI * radius ** 2;
    return area;
};
console.log(circleAreaArrowFunction(10));

// console.log(area) => Uncaught ReferenceError: area is not defined

const age = 32;

const myFunction1 = () => {
    // console.log(lastName);
    const firstName = "Remi";
    return firstName;
};

const myFunction2 = () => {
    // console.log(firstName);
    const lastName = "HOEPPE";
    const firstName = myFunction1();
    return `${firstName} ${lastName}`;
};

console.log(myFunction1());
console.log(myFunction2());

//  Nested Scopes

const myGlobalVariable = "Global String";

const scope1 = (scope1Arg) => {
    const myNumber = 123;

    const scope2 = (scope2Arg) => {
        const myString = "123";

        const scope3 = (scope3Arg) => {
            const scope3Variable = "HELLO";
            // In scope 3 I have access to:
            // Scope1Arg, Scope2Arg, Scope3Arg
            // myGlobalVariable
            // myNumber
            // myString
            // scope3Variable
            console.log("In scope 3:", scope3Variable);
            console.log(scope3Arg);
            console.log(scope2Arg);
            console.log(scope1Arg);
        };
        scope3("Arguments of Scope 3");
        // In scope 2 I have access to:
        // scopeArg1, scope2Arg
        // myGlobalVariable
        // myNumber
        // myString
        // console.log(scope3Variable);
        console.log("In Scope 2:", myString);
        console.log(scope2Arg);
    };
    scope2("Arguments of Scope 2");

    // In scope 1 I have access to:
    // scope1Arg
    // myGlobal
    // myNumber

    console.log("In Scope 1:", myNumber);
    console.log(scope1Arg);
};
scope1("Arguments of Scope 1");

// Parameters v. Global Scope Variables

// Global Variables
const firstName = "Remi";
const lastName = "HOEPPE";

// firstName and lastName are defined by the inputs given to the function, they are NOT the global variables
const fullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
};

console.log(fullName("Calum", "Hill")); // Giving String Arguments to the function
console.log(fullName(firstName, lastName)); // Using our global variables as arguments
