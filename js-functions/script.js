// Functions
//
// Syntax
// ['function' reserved keyword]  [function name](arguments) {
//      function body, this is executed when the function is called;
//      return [variable to return];
// }

function noArgs() {
    console.log("This function is executed");
    console.log("More stuff");
    return "Good Bye";
}

const output = noArgs();
console.log(output);

function rectangleArea(width, length) {
    return width * length;
}

console.log(rectangleArea(100, 200));

// These variables are defined in the global scope
const hello = "hello";
const bye = "good bye";

// Arguments in a function declaration are in the local scope of that function
function printMe(hello, goodBye) {
    return `${hello}, ${goodBye}`;
}

// The order of the arguments given to your function call matters.
// Because the code in your function is order specific
console.log(printMe(bye, hello));
