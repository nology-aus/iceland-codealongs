import StudentCard from "./../components/StudentCard";
import students from "./../data/students.js";
import styles from "./StudentList.module.scss";

const StudentList = () => {
    return (
        <div>
            <h1>Iceland Students</h1>
            <div className={styles.StudentList}>
                {students.map((student, index) => {
                    return (
                        <StudentCard
                            key={index}
                            // propName = {prop value}
                            // when catching a prop inside a child component we are using the propName
                            position={index}
                            firstName={student.firstName}
                            lastName={student.lastName}
                            isPink={index % 2 === 0}
                            // Student 1 at index 0 > index % 2 === 0 is {true}
                            // Student 2 at index 1 > 1 % 2 === 0 is {false}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default StudentList;
