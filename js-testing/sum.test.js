import { sum } from "./sum";

// sum function, parameter: 2 numbers
// sum(1, 1) => 2
// sum() => 0
// sum(7) => 7
// sum(3.124, 5.123) => something
// sum("123", "123") => Error
// sum({}, {}) => Error

describe("Test cases for sum function", () => {
    it("should give a valid sum for 2 numbers", () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(10, 20)).toBe(30);
        expect(sum(11, 3)).toBe(14);
    });

    it("should return 0 for 0 arguments", () => {
        expect(sum()).toBe(0);
    });

    it("should return a if b is undefined", () => {
        expect(sum(7)).toBe(7);
        expect(sum(10)).toBe(10);
        expect(sum(2.14124)).toBe(2.14124);
    });

    it("should return an error, if arguments are not numbers", () => {
        const error = new Error("Arguments must be numbers");

        // When catching an error, we need to pass a function to expect
        // otherwise the exception will crash our test
        expect(() => sum("123", "123")).toThrowError(error);
        expect(() => sum({}, {})).toThrowError(error);
        expect(() => sum("123", 7)).toThrowError(error);
    });
});
