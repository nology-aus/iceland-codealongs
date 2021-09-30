//
//      1. Create a button that allows you to change the styling of the page (ie. night mode)
//      2. Create a button that allows you to add TO DO ITEMS to your list
//          - The user Input should be cleared when the button is clicked
//      3. The "You have nothing to do!" should disapear when you add the first item
//      4. If the Input is empty the user should see an error message

// HOW TO SELECT HTML ELEMENTS THROUGH THE DOM?

// Selecting an Element By ID
const taskInput = document.getElementById("taskInput");
const body = document.getElementById("body");
const addButton = document.getElementById("addButton");
const styleButton = document.getElementById("styleButton");

// Selecting Elements By Class Name
const containers = document.getElementsByClassName("container");
console.log(containers);
console.log(containers[0]);
const buttons = document.getElementsByClassName("button");

// Selecting Elements by Tag Name
const divs = document.getElementsByTagName("div");

// Selecting through QuerySelectors (CSS SELECTORS)
const firstContainer = document.querySelector(".container");
const queryContainers = document.querySelectorAll(".container");
const queryTaskInput = document.querySelector("#taskInput");

// How to add Event Listeners to elements using the DOM?

// Creating Function to Append a Child Node to a Parent Node
const appendTextElement = (elementType, text, parentNode) => {
    // Create a new Element that is a Paragraph <p>
    const newElement = document.createElement(elementType);
    // Create a textNode with the content of taskInput.value
    const textNode = document.createTextNode(text);
    // Attach the (child) textNode to the (parent) newElem
    newElement.appendChild(textNode);
    // Selecting the element with the class of "tasks" and attaching the newElem to it
    parentNode.appendChild(newElement);
};

const removeElement = (parentNodeId, childNodeId) => {
    const parentNode = document.getElementById(parentNodeId);
    const childNode = document.getElementById(childNodeId);
    parentNode.removeChild(childNode);
};

styleButton.addEventListener("click", () => {
    body.classList.toggle("body--nightMode");

    // containers is an HTML Collection (list) of two elements which have the class of ".container"

    // This is going to loop for
    // i = 0
    // i = 1
    // This loop will stop when i = 2;

    for (let i = 0; i < containers.length; i++) {
        containers[i].classList.toggle("container--nightMode");
        // 1st iteration
        // containers[0].classList.toggle("container--nightMode");
        // i++ > i = 1 ;
        // 2nd iteration
        // containers[1].classList.toggle("container--nightMode");
        // i++ > i = 2; This stops my loop
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle("button--nightMode");
    }
});

addButton.addEventListener("click", () => {
    if (taskInput.value === "") {
        alert("Give me a task");
    }
    if (document.getElementById("nothingPara")) {
        removeElement("tasks", "nothingPara");
    }
    appendTextElement("p", taskInput.value, document.getElementById("tasks"));
    taskInput.value = "";
});
