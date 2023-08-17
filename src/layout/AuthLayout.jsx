import React from "react";
import "#assets/styles/auth.css";
import bg from "#assets/images/bg.svg";
import wave from "#assets/images/wave.png";
import { Outlet } from "react-router-dom";
import ChangeLanguage from "../components/change-language";
import ChangeTheme from "../components/change-theme";


const AuthLayout = () => {
    return (
        <div>
            <img className="wave" src={wave} alt="" />
            <div className="toggle-bar d-flex jc-start align-center gap-3 px-2">
                <ChangeTheme/>
                <ChangeLanguage/>
            </div>
            <div className="container p-relative">
                <div className="img">
                    <img src={bg} alt="" />
                </div>
                <div className="login-register-content d-flex jc-center align-center text-center">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
