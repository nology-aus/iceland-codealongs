// fetch
// What is fetch?
// What does it allow us to do?
// Handling fetch results?

// fetch allows us to communicate with programs (apis) over the network
// http/https => hypertext transfer protocol (messaging format)

// fetch => always always ALWAYS returns a promise

// Capitalized, Read only
const CATFACTS_URL = "https://catfact.ninja";

const getBreeds = async (pageNumber) => {
    gi;
    const response = await fetch(`${CATFACTS_URL}/breeds?page=${pageNumber}`);
    const data = await response.json();
    console.log(data);
    return data.data;
};

const button = document.querySelector("#getBreeds");
button.addEventListener("click", async (event) => {
    // get the number from dom

    const input = document.querySelector("#pageNumber");
    const pageNumber = parseInt(input.value);
    if (!pageNumber) {
        alert("Please enter and valid page number");
        return;
    }
    // pass number into getBreeds,
    // getBreeds to return the right page

    // get breeds, Array<Object>
    const breeds = await getBreeds(pageNumber);
    console.log(breeds);
    // create li elements for each breed
    const listItems = breeds.map((breed) => {
        const element = document.createElement("li");
        const breedText = `${breed.breed} is from ${breed.country}`;
        const textNode = document.createTextNode(breedText);

        element.appendChild(textNode);
        return element;
    });

    // attach those li elements to my ul

    const list = document.querySelector("#breeds");
    const append = (parent) => (child) => parent.appendChild(child);
    listItems.forEach(append(list));
});

// Request -> Server
// Recieve the metadata first -> response has started downloading
// Recieve the response body -> response has finish downloading
