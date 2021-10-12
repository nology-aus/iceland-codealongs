import styles from "./Home.module.scss";
import { useState } from "react";
import Button from "./../../components/Button";

const Home = () => {
    const [getCount, setCount] = useState(0);

    // isPink is a variable
    // and it is currently the value that we put into useState
    // setIsPink is a function that takes an argument
    // and when we call it, it will change 'isPink' to whatever we put in

    console.log("Page has re-rendered");

    return (
        <div className={styles.Home}>
            <h1>{getCount}</h1>
            <Button clickCallback={setCount} value={getCount} />
        </div>
    );
};

export default Home;
