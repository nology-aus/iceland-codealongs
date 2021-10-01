// Iterators

const capitalizeArray = (arr) => {
    const capitalArr = [];

    for (let i = 0; i < arr.length; ++i) {
        const capitalName = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        capitalArr.push(capitalName);
    }

    return capitalArr;
};

const map = (arr, func) => {
    const capitalArr = [];

    for (let i = 0; i < arr.length; ++i) {
        const newValue = func(arr[i]);
        capitalArr.push(newValue);
    }

    return capitalArr;
};

const coaches = ["remi", "calum", "aidan", "ollie"];

const capitalize = (currentItem) => {
    console.log("Current Value:", currentItem);
    const capitalName =
        currentItem.charAt(0).toUpperCase() + currentItem.slice(1);
    return capitalName;
};

capitalize("remi"); // "Remi"
capitalize("cheyne"); // "Cheyne"

console.log(map(coaches, capitalize));

// const numbers = [1, 2, 3, 4, 5, 6];
// numbers.map((n) => n ** 2); // [1, 4, 9, 16, 25, 36]

// const mathOps = func1 => func2 => n => func2(func1(n));

// const add5 = (n) => n + 5;
// const square = (n) => n ** 2;

// mathOps(3, add5, square);
// mathOps(3, square, add5);

// (currentItem) => {
//     const capitalName =
//         currentItem.charAt(0).toUpperCase() + currentItem.slice(1);
//     return capitalName;
// }

const ingredients = ["apple", "haggis", "tripe"];

// const ingredientsCaps = [];

// for (let i = 0; i < ingredients.length; ++i) {
//     const capitalName =
//         ingredients[i].charAt(0).toUpperCase() + ingredients[i].slice(1);
//     ingredientsCaps.push(capitalName);
// }

console.log(capitalizeArray(ingredients));

const sections = ["1a", "1b", "2a", "2b", "2c"];
const sectionsCaps = [];

for (let i = 0; i < sections.length; ++i) {
    const lastChar = sections[i].charAt(sections[i].length - 1);
    const capitalName = sections[i].slice(0, -1) + lastChar.toUpperCase();

    sectionsCaps.push(capitalName);
}

console.log(sectionsCaps);

// Key:
// map n length array => new n length array
// filter n length array => new <= n length array

const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1 => 1 % 3 !== 0 => true => keep it!
// 2 => 2 % 3 !== 0 => true => keep it!
// 3 => 3 % 3 !== 0 => false => get rid it!

scores.filter((n) => {
    return n % 3 !== 0;
});

// map: [n things] => [n new things]
// filter: [n things] => [n or less things]
// join: [n things] => string
// split: string => [n things]

// every: [n things] => boolean
// some: [n things] => boolean

// [n things] => generic type (numbers, string, multidimensional)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.reduce((acc, n) => {
    return acc + n;
}, 0);

// (acc = 0, n = 1) => 1
// (acc = 1, n = 2) => 3
// (acc = 3, n = 3) => 6
// (acc = 6, n = 4) => 10
// (acc)

// let accumulator = 0;

// for (let i = 0; i < numbers.length; ++i) {
//     accumulator += numbers[i];
// }

// console.log(sum);

const names = ["martyna", "rachel", "tim"];
names.reduce((acc, name) => `${acc}+${name}`); // acc = "martyna"
// (acc = "martyna", name = "rachel") => "martyna+rachel"
// (acc = "martyna+rachel", name = "tim") => "martyna+rachel+tim"

names.reduce((acc, name) => `${acc}+${name}`, "consultants: ");
// (acc = "consultants: ", name = "martyna") => "consultants: +martyna"
("consultants: +martyna");
("consultants: +martyna+rachel");
("consultants: +martyna+rachel+tim");

// 0 1 2 3 4 5 6 7 8
// e n c r y p t e d

// // Bucket indexes for each cahr
// 0 1 2 0 1 2 0 1 2
