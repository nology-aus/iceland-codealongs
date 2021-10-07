export const rectangleArea = (h, w) => {
    // should throw error if no arguments
    if (h === undefined && w === undefined) {
        throw new Error("No args found");
    }

    // should return square area when 1 arg is passed
    if (typeof h === "number" && w === undefined) {
        return h ** 2;
    }

    // should throw error, when wrong types are passed
    if (typeof h !== "number" || typeof w !== "number") {
        throw new Error("Args need to be numbers");
    }

    // should throw error when an arg is negative
    if (h < 0 || w < 0) {
        throw new Error("Args can't be negative");
    }

    // should give the correct area for 2 numbers
    return h * w;
};
