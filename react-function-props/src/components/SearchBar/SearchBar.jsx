import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
    // Keep track of the input value (realtime input value)
    const [inputValue, setInputValue] = useState("");
    // input changes, I need to update the realtime input value
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // when the button is click, I need to take the realtime value
    //    pass it into onSubmit
    const handleButtonClick = () => {
        onSubmit(inputValue);
    };

    return (
        <div>
            <input
                value={inputValue}
                onChange={handleInputChange}
                type="text"
            />
            <button onClick={handleButtonClick}>Search</button>
        </div>
    );
};

export default SearchBar;
