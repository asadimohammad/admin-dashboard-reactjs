import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { MdEditNote } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

const Category = ({ categories }) => {
    return (
        <table className="p-3">
            <thead>
                <th>Title</th>
                <th>Action</th>
            </thead>
            <tbody>
                {categories.map((item) => (
                    <tr className="py-3">
                        <td>{item}</td>
                        <td className="action d-flex gap-2 jc-center align-center">
                            <span className="icon-action edit" title="edit">
                                <MdEditNote />
                            </span>
                            <span className="icon-action delete" title="delete">
                                <RiDeleteBin5Line />
                            </span>
                            <span
                                className="icon-action show-details"
                                title="show user"
                            >
                                <AiOutlineEye />
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Category;
