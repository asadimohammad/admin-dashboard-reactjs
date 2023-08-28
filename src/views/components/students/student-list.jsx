import React from "react";
import Student from "../../components/students/student";

const StudentList = ({ students }) => {
    return (
        <div className="student-list">
            <table className="p-3">
                <thead>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Family</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <Student key={student.id} {...student} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
