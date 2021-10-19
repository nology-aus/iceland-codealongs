import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findStudent } from "../../services/students";

const Student = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);

    useEffect(() => {
        const populateStudent = async () => {
            const data = await findStudent(id);
            setStudent(data);
        };

        populateStudent();
    }, [id]);

    if (!student) {
        return <h1>Student with Id: {id} was not found</h1>;
    }

    return (
        <div>
            <h2>
                {student.firstName}, {student.lastName}
            </h2>
            <p>Brownie Points: {student.browniePoints}</p>
            <p>Student ID: {student.id}</p>
        </div>
    );
};

export default Student;
