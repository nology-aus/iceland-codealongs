import "./App.css";
import Home from "./containers/Home";

// How do we write React Components?

const Header = () => {
    return (
        <header>
            <h1>This is My React App</h1>
            <p>This is working!</p>
        </header>
    );
};

const App = () => {
    return (
        <>
            <Header />
            <Home />
        </>
    );
};

export default App;
