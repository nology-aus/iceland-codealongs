import styles from "./StudentCard.module.scss";
import PropTypes from "prop-types";

const StudentCard = ({ firstName, lastName, position, isPink }) => {
    // const isFirst =
    //     position === 0
    //         ? [styles.StudentCard, styles.isFirst]
    //         : [styles.StudentCard];

    const classes = isPink
        ? [styles.StudentCard, styles.isPink]
        : [styles.StudentCard];

    return (
        // if isPink is true > className = {styles.StudentCard styles.isPink}
        <div className={classes.join(" ")}>
            <h3>First Name: {firstName}</h3>
            <h3>Last Name: {lastName}</h3>
        </div>
    );
};

StudentCard.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    isPink: PropTypes.bool,
};

export default StudentCard;
