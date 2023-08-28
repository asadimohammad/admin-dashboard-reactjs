// @ts-nocheck
import React, { Suspense } from "react";
import { httpInterceptedServices } from "../../../services/http-requests";
import { Await, defer, useLoaderData, useParams } from "react-router-dom";

const CoursesDetails = () => {
    const loadedCourse = useLoaderData();
    return (
        <Suspense fallback={<h2>درحال دریافت اطلاعات دوره ...</h2>}>
            <Await resolve={loadedCourse.course}>
                {(data) => (
                    <div>
                        <img src={data.image} alt="" />
                        <h2>{data.title}</h2>
                    </div>
                )}
            </Await>
        </Suspense>
    );
};

export async function coursesDetailsLoader({ params }) {
    return defer({
        course: loaderCoursedetails(params),
    });
}

const loaderCoursedetails = async (params) => {
    const response = await httpInterceptedServices.get(
        "/products/" + params.id
    );
    return response.data;
};
export default CoursesDetails;
