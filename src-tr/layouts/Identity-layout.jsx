// @ts-nocheck
import React from "react";
import wave from "#assets/images/wave.png";
import bg from "#assets/images/bg.svg";
import { Outlet } from "react-router-dom";
import ChangeLanguage from "#components/changeLanguage";
import ThemeToggle from "#components/ThemeToggle";

const IdentityLayout = () => {
    return (
        <div>
            <img className="wave" src={wave} alt="" />
            <div className="toggle-bar d-flex jc-start align-center gap-3">
                <ThemeToggle/>
                <ChangeLanguage/>
            </div>
            <div className="container p-relative">
                <div className="img">
                    <img src={bg} alt="" />
                </div>
                <div className="login-register-content d-flex jc-center align-center text-center">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default IdentityLayout;
