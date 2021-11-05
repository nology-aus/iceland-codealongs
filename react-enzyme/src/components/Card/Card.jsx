import { useState } from "react";

const Card = ({ title, content }) => {
    const [toggle, setToggle] = useState();

    const handleClick = () => setToggle(!toggle);

    return (
        <div className="Card">
            <h2 className="Title">{title}</h2>
            <button onClick={handleClick}>Toggle</button>
            {toggle && <p className="Content">{content}</p>}
        </div>
    );
};

export default Card;
