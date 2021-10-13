import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import SearchBar from "./components/SearchBar";

const Quantity = ({ count, onChange }) => {
    // 4. when change happens, when count is about to change
    const increment = (event) => {
        // 5. Calling onChange with new count value
        onChange(count + 1);
    };

    const decrement = (event) => {
        if (count !== 0) {
            onChange(count - 1);
        }
    };

    // 3. render with form count state
    return (
        <>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </>
    );
};

const Select = ({
    value,
    options,
    onChange,
    labelKey = "label",
    valueKey = "value",
}) => {
    // default value
    // list of options, { label: "Label", value: "value" }
    // onChange, to be called when the select value changes

    // 13. When the select value changes, this will be called
    // select onChange will give you an event, NOT a value
    const handleChange = (event) => {
        // 14. Taking the value of the select from the event
        const value = event.target.value;
        // 15. Calling the setter with the new value
        onChange(value);
    };

    // 12. Rendering the select with default value, and options available
    return (
        <select value={value} onChange={handleChange}>
            {options.map((option) => (
                <option key={option[valueKey]} value={option[valueKey]}>
                    {option[labelKey]}
                </option>
            ))}
        </select>
    );
};

const TextField = ({ value, onChange, placeholder = "Enter text here" }) => {
    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
    );
};

const Form = ({ dropdownOptions }) => {
    // 1. setting the count state
    const [formQty, setFormQty] = useState(10);

    // 10. setting the selection state, defaults to volvo
    const [selection, setSelection] = useState(101);

    const [textState, setTextState] = useState("");

    console.log("Selection state", selection);

    const handleQtyChange = (newQty) => {
        // 6. form state setter is called with the new value passed in.
        setFormQty(newQty);

        // 7. component will re-render, formQty = newQty
    };

    return (
        <div>
            <div>
                <TextField
                    value={textState}
                    onChange={setTextState}
                    placeholder="meeeeep"
                />
            </div>
            <div>
                {/* 11. passing in the options, defaultValue, state setter */}
                <Select
                    options={dropdownOptions}
                    value={selection}
                    onChange={setSelection}
                    valueKey="data"
                />
            </div>
            <div>
                {/* 2. Passing count state down, and lending my setter */}
                <Quantity count={formQty} onChange={handleQtyChange} />
            </div>
        </div>
    );
};

function App() {
    const carOptions = [
        { label: "Volvo", data: 100 },
        { label: "Saab", data: 101 },
        { label: "Mercedes", data: 102 },
        { label: "Audi", data: 103 },
        { label: "Toyota", data: 104 },
    ];

    const [search, setSearch] = useState("");

    console.log("App.js search state", search);

    const handleSubmit = (newSearchValue) => {
        setSearch(newSearchValue);
    };

    return (
        <div className="App">
            <div className="Lesson">
                <h2>Lesson: Function as Props</h2>
                <Form dropdownOptions={carOptions} />
            </div>
            <div className="Challenge">
                <h2>Challenge: SearchBar && Function as Props</h2>
                <SearchBar onSubmit={handleSubmit} />
                <p>Search Value: {search}</p>
            </div>
        </div>
    );
}

export default App;
