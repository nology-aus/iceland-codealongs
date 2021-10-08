import styles from "./Card.module.scss";

const Card = () => {
    return (
        <div>
            <section className={styles.Card}>
                <h3 className={styles.Card_Title}>I am a Card</h3>
                <p className={styles.Card_Description}>
                    I am a presentational component. I am rendered by a
                    container component.
                </p>
            </section>
        </div>
    );
};

export default Card;
