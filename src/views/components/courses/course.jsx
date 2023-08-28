import React from "react";
import img from "#assets/images/download.png";
import { MdOutlineRateReview, MdOutlineDiscount } from "react-icons/md";
import { PiClockCountdownBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Course = ({ id , title , description, image, category, rating }) => {
    return (
        <div className="course my-3">
            <div className="course_img w-100">
                <img className="w-100" src={image} alt={title} />
            </div>
            <div className="course_content d-flex flex-col jc-sb gap-2 p-3">
                <span className="category px-2 py-1 d-flex jc-center align-center gap-1">
                    <MdOutlineDiscount />
                    <span>{category}</span>
                </span>
                <Link to={`${id}`} className="title">{title}</Link>
                <p className="description">{description}</p>
                <div className="rating d-flex jc-sb ">
                    <span className="rate d-flex jc-center align-center gap-1">
                        <MdOutlineRateReview />
                        <span>{rating.rate}</span>
                    </span>
                    <span className="count d-flex jc-center align-center gap-1">
                        <PiClockCountdownBold />
                        <span>{rating.count}</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Course;
