import styles from "./Students.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent,
} from "../../services/students";

// const useQuery = () => {
//     const location = useLocation();
//     return new URLSearchParams(location.search);
// };

const StudentCard = ({ student, onSubmit }) => {
    const [firstName, setFirstName] = useState("");

    const handleChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleSubmit = async () => {
        const partial = {
            firstName: firstName,
        };

        await updateStudent(student.id, partial);
        setFirstName("");
        onSubmit();
    };

    const handleDelete = async () => {
        await deleteStudent(student.id);
        onSubmit();
    };

    return (
        <div className={styles.StudentCard}>
            <div>
                <input
                    value={firstName}
                    onChange={handleChange}
                    type="text"
                    placeholder="firstName"
                />
                <button onClick={handleSubmit}>Update</button>
            </div>
            <p>ID: {student.id}</p>
            <p>
                {student.firstName} - {student.lastName}
            </p>
            <p>
                <Link to={`/students/${student.id}`}>Go to</Link>
            </p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

const CreateStudent = ({ onSubmit }) => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        browniePoints: "",
    });

    const handleChange = (property) => (event) => {
        setForm({
            ...form,
            [property]: event.target.value,
        });
    };

    const handleSubmit = async () => {
        const cleaned = {
            ...form,
            browniePoints: parseInt(form.browniePoints),
        };

        await createStudent(cleaned);

        setForm({
            firstName: "",
            lastName: "",
            browniePoints: "",
        });

        onSubmit();
    };

    return (
        <div className={styles.StudentCard}>
            <div>
                <label for="firstName">First Name:</label>
                <input
                    value={form.firstName}
                    onChange={handleChange("firstName")}
                    id="firstName"
                    type="text"
                />
            </div>
            <div>
                <label for="lastName">Last Name:</label>
                <input
                    value={form.lastName}
                    onChange={handleChange("lastName")}
                    id="lastName"
                    type="text"
                />
            </div>
            <div>
                <label for="browniePoints">Brownie Points:</label>
                <input
                    value={form.browniePoints}
                    onChange={handleChange("browniePoints")}
                    id="browniePoints"
                    type="text"
                />
            </div>
            <button onClick={handleSubmit}>Save</button>
        </div>
    );
};

const Students = () => {
    const [students, setStudents] = useState(null);

    // const query = useQuery();
    // const name = query.get("name") ?? "";
    // const limit = query.get("limit") ? parseInt(query.get("limit")) : 10;

    const populateStudents = async () => {
        const data = await getStudents();
        setStudents(data);
    };

    useEffect(() => populateStudents(), []);
    const handleSubmit = () => populateStudents();

    // const filteredStudents = students
    //     .filter((student) => {
    //         return `${student.firstName} ${student.lastName}`
    //             .toLowerCase()
    //             .includes(name);
    //     })
    //     .slice(0, limit);

    return (
        <div className={styles.Students}>
            <CreateStudent onSubmit={handleSubmit} />
            {students &&
                students.map((student, index) => (
                    <StudentCard
                        onSubmit={handleSubmit}
                        student={student}
                        key={index}
                    />
                ))}
        </div>
    );
};

export default Students;
