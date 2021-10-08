// Shorthand for boiler plate Functional Component
// `rafce`

import styles from "./Home.module.scss";
import Card from "../../components/Card/Card.jsx";

const Home = () => {
    return (
        <div className={styles.Home}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
};

export default Home;
