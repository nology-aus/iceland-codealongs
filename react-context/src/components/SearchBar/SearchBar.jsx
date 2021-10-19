import { useState, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const SearchBar = () => {
    const [currentInput, setCurrentInput] = useState("");
    const { setSearch } = useContext(SearchContext);

    const handleChange = (event) => {
        setCurrentInput(event.target.value);
    };

    const handleClick = (event) => {
        // Update context with current input
        setSearch(currentInput); // Updating context
        // clear the current input
        setCurrentInput(""); // Updating local state
    };

    return (
        <div>
            <input value={currentInput} onChange={handleChange} type="text" />
            <button onClick={handleClick}>Search</button>
        </div>
    );
};

export default SearchBar;
