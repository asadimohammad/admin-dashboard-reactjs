// @ts-nocheck
import React from "react";
import Student from "../../components/students/student";
import Pagination from "../../../components/pagination";

const StudentList = ({ students : {response , pageSize , totalRecords}}) => {
    return (
        <div className="table-list">
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
                    {response.map((student) => (
                        <Student key={student.id} {...student} />
                    ))}
                </tbody>
            </table>
            <div className="card-footer">
                <Pagination totalRecords={totalRecords} pageSize={pageSize}/>
            </div>
        </div>
    );
};

export default StudentList;
