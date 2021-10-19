import logo from "./logo.svg";
import "./App.css";
import Header from "./containers/Header";
import Products from "./containers/Products";
import SearchProvider from "./context/SearchContext";

function App() {
    return (
        <SearchProvider>
            <div className="App">
                <Header />
                <Products />
            </div>
        </SearchProvider>
    );
}

export default App;
