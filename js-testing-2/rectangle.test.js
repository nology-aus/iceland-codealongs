import { rectangleArea } from "./rectangle.js";

describe("Rectangle Area Test Cases / Spec", () => {
    it("should give the correct area for 2 numbers", () => {
        expect(rectangleArea(1, 2)).toBe(2);
        expect(rectangleArea(10, 30)).toBe(300);
        expect(rectangleArea(1.5, 100)).toBe(150);
    });

    it("should throw error if no arguments", () => {
        const noArgsError = new Error("No args found");

        expect(() => rectangleArea()).toThrowError(noArgsError);
    });

    it("should return square area when 1 arg is passed", () => {
        expect(rectangleArea(10)).toBe(10 ** 2);
        expect(rectangleArea(13)).toBe(13 ** 2);
        expect(rectangleArea(63)).toBe(63 ** 2);
    });

    it("should throw error when an arg is negative", () => {
        const negativeError = new Error("Args can't be negative");

        expect(() => rectangleArea(-1, 2)).toThrowError(negativeError);
        expect(() => rectangleArea(1, -2)).toThrowError(negativeError);
        expect(() => rectangleArea(-1, -2)).toThrowError(negativeError);
    });

    it("should throw error, when wrong types are passed", () => {
        const wrongTypeError = new Error("Args need to be numbers");

        expect(() => rectangleArea("123", "123")).toThrowError(wrongTypeError);
        expect(() => rectangleArea(1, "123")).toThrowError(wrongTypeError);
        expect(() => rectangleArea("123", 1)).toThrowError(wrongTypeError);
        expect(() => rectangleArea(true, 1)).toThrowError(wrongTypeError);
        expect(() => rectangleArea({}, 1)).toThrowError(wrongTypeError);
    });
});
