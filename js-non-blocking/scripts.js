// Things to Cover
// Blocking and Non-Blocking Code, what is it? Why?
// Promises, what are they? What do they represent? Why?
// .then, async / await, why?
// fetch

// Vocabulary
// promise
// non-blocking, blocking
// synchronous, asynchronous
// callback
// event

// Blocking, Non-blocking
// Popcorn: (blocking process, synchronous process)
// 1. Starting the microwave
// 2. watching the microwave for x minutes
// 3. beep, pops happen < 3 times a second

// Last Nights Pizza (non-blocking process, asynchronous process)
// 1. Start the microwave
// 2. push washing in
// 3. cat
// 4. watch tv
// 5. BEEEEEEEEEP

// Blocking / sychronous code
let count = 10;
count += 2;
console.log(count);

// Non-blocking / asynchronous code

const eventButton = document.querySelector("#eventButton");

eventButton.addEventListener("click", (event) => {
    alert("Button was clicked");
});

console.log("I happen before button was clicked");

// Non-blcoking again

setTimeout(() => {
    alert("I happen in 1 second");
}, 1000);

// setInterval(() => {
//     alert("I happen every second");
// }, 1000);

console.log("I happen before the timeout callback");

// event-driven programming => notifcations

// [program] -> send something -> [javascript] -> starting timer -> [operating system]
// [program] -> do other things
//                                [javascript] <- notifaction that time is finished <- [operating system]

// synchronous

// [program] -> wait for a click event

// // polling, waiting, blocking
// while (click event has not happened)
//     check if event has happen

// [program] -> other things
