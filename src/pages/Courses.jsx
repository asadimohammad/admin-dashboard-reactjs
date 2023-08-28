// @ts-nocheck
import React, { Suspense } from "react";
import { httpInterceptedServices } from "../services/http-requests";
import CourseList from "../views/components/courses/course-list";
import { Await, defer, useLoaderData } from "react-router-dom";

const Courses = () => {
    const courseLoaded = useLoaderData();

    return (
        <div className="courses p-3">
            <div className="top-content">
                <div className="btn-add">
                    <button className="py-1 px-3">افزودن دوره جدید</button>
                </div>
            </div>
            <div className="course-content my-3">
                <Suspense fallback={<h2>در حال دریافت اطلاعات ...</h2>}>
                    <Await resolve={courseLoaded.coursesData}>
                        {(data) => <CourseList courses={data} />}
                    </Await>
                </Suspense>
            </div>
        </div>
    );
};

export default Courses;

export const coursesLoader = async () => {
    return defer({
        coursesData: loaderData(),
    });
};

export const loaderData = async () => {
    const response = await httpInterceptedServices.get("products");
    return response.data;
};
