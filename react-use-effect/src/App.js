import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

// What is a lifecycle?
// What is the component lifecycle?
// What steps exist in the lifecycle?
// How do we use useEffect to interact with the lifecycle?

// Component Lifecycle:
// Mounting => component is rendered the for the first time
// Updates => Changes in state, props, (other things like context state)
// Unmounting => unrendered

// initialValue changes -> count -> updates
// onClick -> count -> updates

// Mount => birth of component
// Unmount => death of component

const Counter = ({ initialValue }) => {
    const [count, setCount] = useState(initialValue);
    const [updates, setUpdates] = useState(-1);

    useEffect(() => {
        console.log("component is mounting");

        // Return value of the mount function will run
        // on unmount
        return () => {
            console.log("component is unmounting");
        };
    }, []);

    // 2. useEffect watching count state is run
    useEffect(() => {
        // On update
        console.log("The count has been changed");
        console.log("Current value of count", count);
        // 3. updates is updated based on changes to count
        setUpdates(updates + 1);

        // before update
        return () => {
            console.log("(Unmount) Current value of count", count);
        };
    }, [count]);

    useEffect(() => {
        setCount(initialValue);
    }, [initialValue]);

    return (
        <div>
            {/* 1. Count state is updated */}
            <button onClick={() => setCount(count + 1)}>Add 1</button>
            <span>{count}</span>
            <p>State Updates: {updates}</p>
        </div>
    );
};

const Quantity = ({ initialValue, onChange }) => {
    const [count, setCount] = useState(initialValue);

    const decrement = (n) => () => setCount(count - n);
    const increment = (n) => () => setCount(count + n);

    useEffect(() => {
        onChange(count);
    }, [count]);

    return (
        <div className="Quantity_Buttons">
            <button onClick={decrement(1)}>-</button>
            <span>{count}</span>
            <button onClick={increment(1)}>+</button>
            <button onClick={increment(2)}>+2</button>
            <button onClick={increment(10)}>+10</button>
            <button onClick={increment(100)}>+100</button>
            <button onClick={increment(10000)}>+10000</button>
            <button onClick={increment(3543713)}>+3543713</button>
        </div>
    );
};

const Form = () => {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");
    const [updates, setUpdates] = useState(-1);

    useEffect(() => {
        setUpdates(updates + 1);
    }, [input1, input2, input3]);

    console.log(input1, input2, input3);

    return (
        <>
            <p>Number of Updates: {updates}</p>
            <input
                type="text"
                value={input1}
                onChange={(event) => setInput1(event.target.value)}
            />
            <input
                type="text"
                value={input2}
                onChange={(event) => setInput2(event.target.value)}
            />
            <input
                type="text"
                value={input3}
                onChange={(event) => setInput3(event.target.value)}
            />
        </>
    );
};

const RandomWord = () => {
    const [words, setWords] = useState([
        "dictionary",
        "ham",
        "sammich",
        "itinial",
    ]);

    const [word, setWord] = useState("");

    useEffect(() => {
        const random = Math.floor(Math.random() * words.length);
        setWord(words[random]);

        const intervalId = setInterval(() => {
            const random = Math.floor(Math.random() * words.length);
            console.log("Random", random, "Word:", words[random]);
            setWord(words[random]);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return <h3>{word}</h3>;
};

const Breeds = () => {
    // 1. breeds state intialized as null
    const [breeds, setBreeds] = useState(null);

    useEffect(() => {
        const getBreeds = async () => {
            const response = await fetch("https://catfact.ninja/breeds");
            const json = await response.json();
            const data = json.data;
            // 4. When we get a response, set the breeds state to some data
            setBreeds(data);
        };

        // 2. Timeout is initialized
        setTimeout(() => {
            // 3. Once timeout has elapsed request is performed
            getBreeds();
        }, 1500);
    }, []);

    return (
        <div>
            {/* 5. When breeds is not null, we map and render the breeds */}
            {!breeds ? (
                <p>We have no breeds to show you</p>
            ) : (
                breeds
                    .slice(0, 10)
                    .map((breed, index) => <p key={index}>{breed.breed}</p>)
            )}
        </div>
    );
};

const App = () => {
    const [toggleCount, setToggleCount] = useState(true);
    const [toggleRandWord, setToggleRandWord] = useState(true);
    const [count, setCount] = useState(5);
    const [qty, setQty] = useState(7);

    return (
        <div className="App">
            <div className="Counter">
                <div>
                    <h1>Counter Code-along</h1>
                    <button onClick={() => setToggleCount(!toggleCount)}>
                        Toggle Counter
                    </button>
                    <button onClick={() => setCount(count + 1)}>
                        App Count Add
                    </button>
                    <p>App count is: {count}</p>
                </div>
                {toggleCount && <Counter initialValue={count} />}
            </div>
            <div className="Quantity">
                <h1>Quantity Onchange Code-along</h1>
                <Quantity initialValue={qty} onChange={setQty} />
                <p>The Current quantity is: {qty}</p>
            </div>
            <div className="Form">
                <h1>Use Effect watching multiple states</h1>
                <Form />
            </div>
            <div className="RandomWord">
                <h1>Practical Unmounting Example</h1>
                <div>
                    <button onClick={() => setToggleRandWord(!toggleRandWord)}>
                        Toggle Random Word
                    </button>
                </div>
                {toggleRandWord && <RandomWord />}
            </div>
            <div className="ApiContainer">
                <h1>Using Mount for API Calls</h1>
                <Breeds />
            </div>
        </div>
    );
};

export default App;
