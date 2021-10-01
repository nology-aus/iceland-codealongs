// async / await
// What does the async keyword do?
// What does the await keyword do?
// What types of things can we wait for?
// Why should we use async / await?

const sleep = (timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${timeout / 1000} seconds has elapsed`);
            resolve();
        }, timeout);
    });
};

console.log("this is my console.log");

const syncFunction = (number) => number + 1;

console.log("Sync 10", syncFunction(10)); // Number: 11
console.log("Sync 20", syncFunction(20)); // Number: 21

const asyncFunction = async (number) => number + 1;

console.log("Async 10", asyncFunction(10)); // Promise { <fulfilled>: 11 };
console.log("Async 20", asyncFunction(20)); // Promise { <fulfilled>: 21 };

const delayedIncrement = async (initial, add, timeout) => {
    console.log("2. Before Sleep");
    await sleep(timeout);
    console.log("5. After Sleep");
    return initial + add;
};

console.log("1. Before delayed increment");
const delayedPromise = delayedIncrement(10, 5, 200);
console.log("3", delayedPromise); // Promise { pending }
console.log("4. After delayed increment");

setTimeout(() => {
    console.log("Promise should be fulfilled", delayedPromise);
}, 199);

const blockingAsync = async () => {
    for (let i = 0; i < 100; ++i) {
        await sleep(100);
        console.log(`The current value for i is ${i}`);
    }
};

blockingAsync();
console.log("This doesn't happen first");

const handler = async (string) => {
    await sleep(undefined);
    return string;
};

handler("Hi tim");
console.log("When am I going to happen?");

const startMicrowave = async (food, time) => {
    await sleep(time); // The microwave running

    if (food === "Popcorn" && time > 5000) {
        throw new Error("You house has exploded");
    } else {
        return "Enjoy your meal";
    }
};

const startOven = async (food, time) => {
    await sleep(time); // Oven running

    if (time > 5000) {
        throw new Error("You burnt everything");
    } else {
        return "Enjoy tour meal";
    }
};

const tasks = async (ovenFood, microWave) => {
    const microwavePromise = startMicrowave(microWave, 1000);
    const ovenPromise = startOven(ovenFood, 3000);
    console.log("put washing in");
    console.log("feed cat");
    console.log("watch tv");

    const promises = [microwavePromise, ovenPromise];
    console.log("promises", promises);
    const values = await Promise.all(promises);

    console.log("resolved values", values);
};

console.log("I happen before the microwave / oven has finished");
