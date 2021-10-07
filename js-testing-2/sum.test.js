import { sum } from "./sum.js";

describe("Test cases for sum function", () => {
    const error = new Error("Args must be numbers");

    it("should sum for single arguments", () => {
        expect(sum(7)).toBe(7);
        expect(sum(1248765)).toBe(1248765);
    });

    it("should sum multiple arguments", () => {
        expect(sum(1, 1)).toBe(2);
        expect(sum(1, 2, 3)).toBe(6);
        expect(sum(123, 123, 123)).toBe(369);
    });

    it("should return 0 with no arguments", () => {
        expect(sum()).toBe(0);
    });

    it("should throw if string is passed", () => {
        expect(() => sum("string")).toThrowError(error);
    });

    it("should throw error if any argument is invalid", () => {
        expect(() => sum(10, 23, 15, "123")).toThrowError(error);
        expect(() => sum(10, 24, {})).toThrowError(error);
    });
});
