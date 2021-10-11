import "./App.css";
import Home from "./container/Home";

function App() {
    console.log("App is re-rendered");
    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;
