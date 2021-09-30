// Named export - as many as you want per module
// + imported by name as they are part of the import {object}
// Default export - only one per module

import createElemWithText from "./dom-utils.js";
import { rectPerim, rectArea } from "./rectangle.js";
import circleArea, { circlePerim } from "./circle.js";

// Only works when running JS in the browser (where we can access the DOM)

const rectForm = document.querySelector("#rectangleForm");
rectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const x = document.querySelector("#x");
    const y = document.querySelector("#y");

    const parent = document.querySelector("#rectangleOutput");
    createElemWithText(
        "p",
        `Perimeter is: ${rectPerim(x.value, y.value)}`,
        parent,
    );
    createElemWithText("p", `Area is: ${rectArea(x.value, y.value)}`, parent);
});

const circleForm = document.querySelector("#circleForm");
circleForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const radius = document.querySelector("#radius");

    const parent = document.querySelector("#circleOutput");
    createElemWithText(
        "p",
        `Perimeter is: ${circlePerim(radius.value)}`,
        parent,
    );
    createElemWithText("p", `Area is: ${circleArea(radius.value)}`, parent);
});

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("change", (event) => {
        const value = event.target.value;
        if (isNaN(value)) {
            event.target.value = "";
        }
    });
});
