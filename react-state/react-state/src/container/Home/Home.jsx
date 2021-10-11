import styles from "./Home.module.scss";
import { useState } from "react";

const Home = () => {
    const [isBlue, setIsBlue] = useState(false);
    const [isRed, setIsRed] = useState(false);
    // isPink is a variable
    // and it is currently the value that we put into useState
    // setIsPink is a function that takes an argument
    // and when we call it, it will change 'isPink' to whatever we put in

    let classes;
    if (isBlue && isRed)
        classes = [styles.Home, styles.Home__background_purple];
    else if (isBlue) classes = [styles.Home, styles.Home__background_blue];
    else if (isRed) classes = [styles.Home, styles.Home__background_red];
    else classes = [styles.Home];

    const buttonBlue = (event) => {
        setIsBlue(!isBlue); // isPink is a boolean, so it's true or false
    };
    const buttonRed = (event) => {
        setIsRed(!isRed);
    };

    return (
        <div className={classes.join(" ")}>
            <button onClick={buttonBlue}>Make blue</button>
            <button onClick={buttonRed}>Make red</button>
        </div>
    );
};

export default Home;
