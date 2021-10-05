export const sum = (a, b) => {
    if (a === undefined && b === undefined) {
        return 0;
    }

    if (b === undefined) {
        return a;
    }

    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Arguments must be numbers");
    }

    return a + b;
};
