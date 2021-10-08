export const sum = (...args) => {
    if (args.some((arg) => typeof arg !== "number")) {
        throw new Error("Args must be numbers");
    }

    return args.reduce((acc, n) => acc + n, 0);
};
