import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
    const [search, setSearch] = useState("");
    const handleChange = (event) => setSearch(event.target.value);
    const handleClick = (event) => onSubmit(search);

    return (
        <div className="SearchBar">
            <input type="text" onChange={handleChange} value={search} />
            <button onClick={handleClick}>Search</button>
        </div>
    );
};

export default SearchBar;
