import { sum } from "./sum.js";

const button = document.querySelector("#getSum");

button.addEventListener("click", () => {
    alert(`${sum(10, 11)} is 21`);
});
