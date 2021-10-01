// Promises
// What is a promise?
// Why do we use them? (have to)
// What do they represent in Javascript?

// What is a promise?
// two parties, (or more)
// May be fulfilled later on.
// Might not happen, delayed, cancelled
// lets you down when it doesn't happen

const getRandomNumber = () => {
    return Math.ceil(Math.random() * 100);
};

const getRandomNumberPromise = () => {
    //                  fulfill, cancel
    return new Promise((resolve, reject) => {
        const n = Math.ceil(Math.random() * 100);

        if (n > 50) {
            reject(n);
        } else {
            resolve(n);
        }
    });
};

// console.log(getRandomNumber());
// console.log(typeof getRandomNumber());

// // console.log(getRandomNumberPromise());
// // console.log(typeof getRandomNumberPromise());
// // console.log(getRandomNumberPromise().constructor.name); // Promise

// const numberPromise = getRandomNumberPromise();

// numberPromise // 20, Promise { <fullfilled>: 20 }
//     .then((n) => {
//         // 21, Promise { <fulfilled>: 21 }
//         console.log(`Increment n => ${n}`);
//         return n + 1;
//     })
//     .then((n) => {
//         // 22, Promise { <fulfilled>: 22 }
//         console.log(`Increment n => ${n}`);
//         n = n + 1;

//         if (n % 2 === 0) {
//             throw new Error(`${n} is a multiple of 2`);
//         } else {
//             return n;
//         }
//     })
//     .catch((error) => {
//         console.log("This is happening in the catch callback", error);
//     });

// console.log("this will run first");

// console.log(numberPromise);
// numberPromise
//     .then((n) => {
//         console.log(`The random number is ${n}`);
//     })
//     .catch((n) => {
//         console.log(`The promise was rejected with ${n}`);
//     });

// const delayedIncrement = (initialValue, timeout) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(initialValue + 1);
//         }, timeout);
//     });
// };

// const incrementPromise = delayedIncrement(10, 2000);
// const start = Date.now() / 1000;

// incrementPromise
//     .then((n) => {
//         console.log(Date.now() / 1000 - start); // 2 ish
//         console.log(`My increneted n is ${n}`);
//         return delayedIncrement(n, 3000);
//     })
//     .then((n) => {
//         console.log(Date.now() / 1000 - start); // 5 ish
//         console.log(`My increneted n is ${n}`);
//     });

// console.log("I'm first, I win");

const neverResolve = () => {
    return new Promise((resolve, reject) => {
        const timeout = () => {
            setTimeout(timeout, 1000);
        };

        setTimeout(timeout, 1000);
    });
};

const naughtyPromise = neverResolve();

naughtyPromise.then((value) => console.log(value));
console.log(naughtyPromise);

setTimeout(() => {
    console.log(naughtyPromise);
}, 20000);
