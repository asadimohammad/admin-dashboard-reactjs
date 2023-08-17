// @ts-nocheck
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login, { loginAction } from "../views/auth/Login";
import Register, { registerAction } from "../views/auth/Register";
import IdentityLayout from "../layouts/Identity-layout";
import MainLayout from '../layouts/main-layout'
import Courses from "../pages/Courses";

const Routers = createBrowserRouter([
    {
        element: <MainLayout/>,
        path : '/' ,
        children:[
            {
                element: <Courses/> ,
                index : true
            }
        ]
    } ,
    {
        element: <IdentityLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
                errorElement: <Login/> ,
                action: loginAction
            },
            {
                path: "register",
                element: <Register />,
                errorElement: <Register/> ,
                action: registerAction 
            },
        ],
    },
]);

export default Routers;
