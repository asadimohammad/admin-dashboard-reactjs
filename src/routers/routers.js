import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login, { actionLogin } from "../views/auth/Login";
import Register, { actionRegister } from "../views/auth/Register";
import AuthLayout from "../layout/AuthLayout";
import MainLayout from "../layout/MainLayout";
import Courses, { coursesLoader } from "../pages/Courses";
import Students, { studentsLoader } from "../pages/Students";
import CoursesDetails, { coursesDetailsLoader } from "../views/components/courses/courses-details";
import CourseCategories, { CourseCategoriesLoader } from "../pages/course-categories";

export const routers = createBrowserRouter([
    {
        path : '/' ,
        element : <MainLayout/> , 
        children : [
            {
                path : '/products',
                element : <Courses/> ,
                index : true ,
                loader : coursesLoader
            } ,
            {
                element : <CoursesDetails/> ,
                path : '/products/:id' ,
                loader : coursesDetailsLoader
            } ,
            {
                element : <CourseCategories/> ,
                path : '/courseCategory' ,
                loader : CourseCategoriesLoader
            } ,
            {
                element : <Students/> ,
                path : '/students' ,
                loader : studentsLoader
            } ,
        ]
    },
    {
        element : <AuthLayout/> ,
        children : [
            {
                path : '/login' ,
                element : <Login/> ,
                action : actionLogin ,
                errorElement : <Login/>
            } ,
            {
                path : '/register' ,
                element : <Register/> ,
                action : actionRegister ,
                errorElement : <Register/>
            }
        ]
    }
])