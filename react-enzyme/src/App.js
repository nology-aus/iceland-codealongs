import logo from "./logo.svg";
import "./App.css";
import Article from "./components/Article";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";

function App() {
    const content = "Shapeships go in space";

    return (
        <div className="App">
            <Card title="Spaceships" content={content} />
            <SearchBar />
        </div>
    );
}

export default App;
