import { useState } from "react";
import styles from "./StudentsList.module.scss";

const Quantity = ({ count, onChange, min = 0, max = 5 }) => {
    const inc = (event) => {
        if (count < max) {
            onChange(count + 1);
        }
    };

    const dec = (event) => {
        if (count > min) {
            onChange(count - 1);
        }
    };

    return (
        <div>
            <button onClick={dec}>-</button>
            <span>{count}</span>
            <button onClick={inc}>+</button>
        </div>
    );
};

const students = [
    { firstName: "Stephen", lastName: "Gray", browniePoints: 100 },
    { firstName: "Natalie", lastName: "Hodgson", browniePoints: 100 },
    { firstName: "Martyna", lastName: "Krol", browniePoints: 100 },
    { firstName: "Cheyne", lastName: "Murdoch", browniePoints: 100 },
    { firstName: "Sandra", lastName: "Myrda", browniePoints: 100 },
    { firstName: "Timothy", lastName: "Ng", browniePoints: 100 },
    { firstName: "Yujin", lastName: "Ok", browniePoints: 100 },
    { firstName: "Sebastian", lastName: "Penedo", browniePoints: 100 },
    { firstName: "Prakash", lastName: "Poudel", browniePoints: 100 },
    { firstName: "Harrison", lastName: "Powell", browniePoints: 100 },
    { firstName: "Jinn", lastName: "Tsang", browniePoints: 100 },
    { firstName: "Emily", lastName: "Graham", browniePoints: 100 },
    { firstName: "Andrew", lastName: "Borg", browniePoints: 100 },
    { firstName: "Rachel", lastName: "Venus", browniePoints: 100 },
    { firstName: "Jeremy", lastName: "Chee", browniePoints: 100 },
    { firstName: "Blake", lastName: "Stickland", browniePoints: 100 },
];

const StudentCard = ({ student }) => {
    return (
        <div className={styles.StudentCard}>
            <dl>
                <dt>Firstname:</dt>
                <dd>{student.firstName}</dd>
                <dt>Lastname:</dt>
                <dd>{student.lastName}</dd>
                <dt>Brownie Points:</dt>
                <dd>{student.browniePoints}</dd>
            </dl>
        </div>
    );
};

const StudentsList = () => {
    const [count, setCount] = useState(5);
    return (
        <>
            <Quantity
                count={count}
                onChange={setCount}
                min={0}
                max={students.length}
            />
            <div className={styles.StudentsList_Grid}>
                {students.slice(0, count).map((student, index) => (
                    <StudentCard key={index} student={student} />
                ))}
            </div>
        </>
    );
};

export default StudentsList;
