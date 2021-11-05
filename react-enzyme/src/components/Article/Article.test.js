import { shallow } from "enzyme";
import Article from "./Article";

describe("Article Component Tests", () => {
    it("should render header", () => {
        const headerText = "Article Header";
        // Mount the component
        const wrapper = shallow(<Article />);
        // search for the header
        const header = wrapper.find(".Header");
        // check if the header is within the component
        expect(header).toHaveLength(1);
        // check if the content is correct
        expect(header.at(0).text()).toBe(headerText);
    });

    it("should render the right content", () => {
        const contentText = "Article content 1";
        const contentText2 = "Article content 2";
        // Mount the component
        const wrapper = shallow(<Article />);
        // search for the content
        const contentList = wrapper.find(".Content");
        // check if exists
        expect(contentList).toHaveLength(2);
        // check that the content is correct
        expect(contentList.at(0).text()).toBe(contentText);
        expect(contentList.at(1).text()).toBe(contentText2);
    });
});
