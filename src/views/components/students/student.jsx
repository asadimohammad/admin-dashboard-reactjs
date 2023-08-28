import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdEditNote } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";

const Student = ({ id, email, name, phone, username }) => {
    return (
        <tr className="py-3">
            <td>{id}</td>
            <td>{username}</td>
            <td>{name.firstname}</td>
            <td>{name.lastname}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td className="action d-flex gap-2 jc-center align-center">
                <span className="icon-action edit" title="edit">
                    <MdEditNote />
                </span>
                <span className="icon-action delete" title="delete">
                    <RiDeleteBin5Line />
                </span>
                <span className="icon-action show-details" title="show user">
                    <AiOutlineEye />
                </span>
            </td>
        </tr>
    );
};

export default Student;
