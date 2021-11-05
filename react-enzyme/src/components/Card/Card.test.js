import { shallow } from "enzyme";
import Card from "./Card";

describe("Card Tests", () => {
    const title = "Spaceships";
    const content = "Spaceships are for space travel";
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Card title={title} content={content} />);
    });

    it("should render title correctly", () => {
        const titleList = wrapper.find(".Title");
        expect(titleList).toHaveLength(1);
        expect(titleList.at(0).text()).toBe(title);
    });

    it("should not display content on mount", () => {
        const contentList = wrapper.find(".Content");
        expect(contentList).toHaveLength(0);
    });

    it("should show content on button click", () => {
        const button = wrapper.find("button").at(0);
        button.simulate("click");

        const contentList = wrapper.find(".Content");
        expect(contentList).toHaveLength(1);

        expect(contentList.at(0).text()).toBe(content);
    });
});
