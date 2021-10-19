import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState("");

    console.log("COMING FROM SEARCH CONTEXT", search);

    const data = { search, setSearch };

    return (
        <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
    );
};

export default SearchProvider;
