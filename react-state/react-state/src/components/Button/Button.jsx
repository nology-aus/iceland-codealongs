import { useState } from "react";

const Button = ({ clickCallback, value }) => {
    const [hasBeenClicked, setHasBeenClicked] = useState(false);

    // import useState
    // initialise variables
    // implement the setter
    // implement the getter

    const buttonClick = (event) => {
        clickCallback(value + 1);
        setHasBeenClicked(true);
    };

    let buttonText = hasBeenClicked ? "I have been clicked!" : "Click me";

    return (
        <>
            <button onClick={buttonClick}>{buttonText}</button>
        </>
    );
};

export default Button;
