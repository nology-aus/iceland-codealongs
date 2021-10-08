import PropTypes from "prop-types";
import styles from "./Card.module.scss";

// We are catching these props in our Card component (arguments brackets)
const Card = ({ title, description, number }) => {
    // Creating variable called numberProp
    let numberProp =
        // If passing number prop from parent, numberProp will be a paragraph
        number !== undefined ? (
            <p className={styles.Card_Description}>
                The Number passed as prop is {number}
            </p>
        ) : (
            // If not passing number prop from parent, numberProp is an empty fragment (nothing)
            <></>
        );

    return (
        <div>
            <section className={styles.Card}>
                {/* We using the value that is stored inside of our prop in place of static
                First Card > title = Card 1 , description = I am a Card. I am the first */}
                <h3 className={styles.Card_Title}>{title}</h3>
                <p className={styles.Card_Description}>{description}</p>
                {numberProp}
            </section>
        </div>
    );
};

// Defining the required types for each prop
Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    number: PropTypes.number,
};

// Defining default values for each prop
Card.defaultProps = {
    title: "This is the default name of my card",
    description: "This is some placeholder default description",
};

export default Card;
