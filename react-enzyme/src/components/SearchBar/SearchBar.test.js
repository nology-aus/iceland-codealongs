import { shallow } from "enzyme";
import SearchBar from "./SearchBar";

describe("SearchBar Tests", () => {
    it("should trigger onSubmit with the right value", () => {
        const mockInput = "harry potter";
        // create a mock function
        const mockSubmit = jest.fn((value) => value);
        // pass our mock function into the component (shallow)
        const wrapper = shallow(<SearchBar onSubmit={mockSubmit} />);
        // simulate a "change" event input
        wrapper
            .find("input")
            .at(0)
            .simulate("change", { target: { value: mockInput } });
        // simulate a "click" event on the button
        const button = wrapper.find("button").at(0);
        button.simulate("click");
        // assert that the mock function was called,
        expect(mockSubmit.mock.calls).toHaveLength(1);
        //    and that it gives the right value
        expect(mockSubmit.mock.calls[0][0]).toBe(mockInput);
        expect(mockSubmit.mock.results[0].value).toBe(mockInput);

        for (let i = 0; i < 10; ++i) button.simulate("click");
        expect(mockSubmit.mock.calls).toHaveLength(11);
    });

    it("should behave the same for all inputs", () => {
        // create a mock function
        const mockSubmit = jest.fn((value) => value);
        // pass our mock function into the component (shallow)
        const wrapper = shallow(<SearchBar onSubmit={mockSubmit} />);

        // const input = wrapper.find("input").at(0);
        const button = wrapper.find("button").at(0);

        for (let i = 0; i < 100; ++i) {
            const random = Math.floor(Math.random() * 21512512);
            const randomString = random.toString();
            wrapper
                .find("input")
                .at(0)
                .simulate("change", { target: { value: randomString } });
            button.simulate("click");
            expect(mockSubmit.mock.calls).toHaveLength(i + 1);
            console.log(JSON.stringify(mockSubmit.mock.calls));
            expect(mockSubmit.mock.calls[i][0]).toBe(randomString);
            expect(mockSubmit.mock.results[i].value).toBe(randomString);
        }
    });
});
