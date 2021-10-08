import styles from "./App.module.scss";
import Home from "./containers/Home";
import Article from "./components/Article";

// How do we write React Components?

const Header = () => {
    return (
        <div>
            <h1>This is my React App</h1>
            <p>It is working!</p>
        </div>
    );
};

const App = () => {
    return (
        <div className={styles.App}>
            <Header />
            <Home />

            {/* Calling `Article` component inside of App (root) component */}
            <Article
                // Passing 3 props to Article component
                // each props has a propName = (propValue "string" {number})
                title="Article 1"
                subtitle="Subtitle 1"
                content="Content 1"
            />
            <Article
                title="Article 2"
                subtitle="Subtitle 2"
                content="Content 2"
            />
            <Article />
        </div>
    );
};

export default App;
