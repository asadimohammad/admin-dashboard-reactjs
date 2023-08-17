import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login, { actionLogin } from "../views/auth/Login";
import Register, { actionRegister } from "../views/auth/Register";
import AuthLayout from "../layout/AuthLayout";
import MainLayout from "../layout/MainLayout";
import Courses from "../pages/Courses";

export const routers = createBrowserRouter([
    {
        path : '/' ,
        element : <MainLayout/> , 
        children : [
            {
                path : 'courses' ,
                element : <Courses/> ,
                index : true
            }
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