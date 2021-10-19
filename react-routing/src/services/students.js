import firestore from "./firestore"; // Firestore

// clean a student record,
const cleanRecord = (docSnapshot) => ({
    id: docSnapshot.id,
    ...docSnapshot.data(),
});

const cleanRecords = (querySnapshot) => {
    return querySnapshot.docs.map(cleanRecord);
};

// clean lots of student records

// get all students from firestore
export const getStudents = async () => {
    // CollectionReference
    const colRef = firestore.collection("students");
    // Promise<QuerySnapshot> -> QuerySnapshot
    const snapshot = await colRef.get();

    // Array<QueryDocumentSnapshot> -> Array<T>
    return cleanRecords(snapshot);
};

// get a specific student from firestore using an id
export const findStudent = async (id) => {
    // ColletionReference
    const colRef = firestore.collection("students");
    // DocumentReference
    const docRef = colRef.doc(id);
    // Promise<DocumentSnapshot> -> DocumentSnapshot
    const docSnap = await docRef.get();

    // T -> Custom Object
    return cleanRecord(docSnap);
};

export const createStudent = async (student) => {
    // CollectionReference
    const colRef = firestore.collection("students");
    // DocumentReference
    const docRef = colRef.doc();
    await docRef.set(student);
};

export const updateStudent = async (id, partial) => {
    const colRef = firestore.collection("students");
    const docRef = colRef.doc(id);
    await docRef.update(partial);
};

export const deleteStudent = async (id) => {
    const colRef = firestore.collection("students");
    const docRef = colRef.doc(id);
    await docRef.delete();
};
