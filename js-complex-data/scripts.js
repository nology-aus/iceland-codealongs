function coachFactory(id, firstName, lastName, age, title) {
    return {
        id: id,
        firstName: firstName,
        lastName: lastName,
        age: age,
        title: title,
    };
}

const coaches = [
    coachFactory(1, "Remi", "Hoeppe", 30, "Junior Coach"),
    {
        id: 2,
        firstName: "Calum",
        lastName: "Hill",
        age: 23,
        title: "Senior Coach",
    },
    {
        id: 3,
        firstName: "Aidan",
        lastName: "Tesselaar",
        age: 27,
        title: "Coach",
    },
];

const stuff = document.querySelector("#stuff");

const coachElements = coaches.map((coach) => {
    const coachString = `${coach.lastName}, ${coach.firstName}`;

    // Create unordered list element
    const coachList = document.createElement("ul");

    // Create first list item
    const coachName = document.createElement("li");
    const coachNameText = document.createTextNode(coachString);
    coachName.appendChild(coachNameText);

    // Create second list item
    const coachAge = document.createElement("li");
    const coachAgeText = document.createTextNode(coach.age);
    coachAge.appendChild(coachAgeText);

    // Appending List items to unordered list;
    coachList.appendChild(coachName);
    coachList.appendChild(coachAge);

    // Returning complete unordered list with items;
    return coachList;
});

console.log(coachElements);

// for (let i = 0; i < coachElements.length; ++i) {
//     stuff.appendChild(coachElements[i]);
// }

const append = (parent) => (element) => parent.appendChild(element);
coachElements.forEach(append(stuff));
