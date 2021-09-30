// 1 - Add results to section using the DOM.

const createElemWithText = (type, text, parent) => {
    const newElem = document.createElement(type);
    const textNode = document.createTextNode(text);
    newElem.appendChild(textNode);
    parent.appendChild(newElem);
};

export default createElemWithText;
