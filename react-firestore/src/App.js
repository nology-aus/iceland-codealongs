import logo from "./logo.svg";
import "./App.css";
// https://firebase.google.com/docs/reference/js/v8/firebase.firestore.Firestore
import firestore from "./services/firestore";

import { useState, useEffect } from "react";

function App() {
    const [students, setStudents] = useState(null);

    useEffect(() => {
        const getStudents = async () => {
            // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.CollectionReference
            const colref = firestore.collection("students");
            // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.QuerySnapshot
            const snapshot = await colref.get();
            // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.QueryDocumentSnapshot
            const cleaned = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setStudents(cleaned);
        };

        getStudents();
    }, []);

    return (
        <div className="App">
            {students &&
                students.map((student) => (
                    <p key={student.id}>
                        {student.id}, {student.firstName}, {student.lastName}
                    </p>
                ))}
        </div>
    );
}

export default App;
