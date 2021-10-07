// Shorthand for boiler plate Functional Component
// `rafce`

import styles from "./Home.module.scss";
import Card from "../../components/Card/Card.jsx";

const Home = () => {
    return (
        <div className={styles.Home}>
            {/* <ComponentName propName="propValue"> */}
            {/* We are passing two props in our Card (child) components
            `title` + `description`. We assign values (as strings) to these props. */}
            <Card
                title="Card 1"
                description="I am a Card. I am the first"
                number={999}
            />
            <Card title="Card 2" description="I am a Card. I am the second" />
            <Card title="Card 3" description="I am a Card" />
            <Card />
            <Card title="Card 5" description="I am a Card" number={123} />
        </div>
    );
};

export default Home;
