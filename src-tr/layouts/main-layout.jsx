// @ts-nocheck
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiMenuAlt2 } from "react-icons/hi";
import "#assets/styles/mainLayout.css";
import ChangeLanguage from "#components/changeLanguage";
import ThemeToggle from "#components/ThemeToggle";

const MainLayout = () => {
    const [collapseSidebar, setCollapseSidebar] = useState(false);
    return (
        <div className="main-layout wrraper d-flex ">
            <nav className={`sidebar ${collapseSidebar ? "collapsed" : ""}`}>
                <a className="sidebar-logo">
                    <img src="" alt="" />
                    <h3>داشبورد مدیریت دوره ها</h3>
                </a>
                <ul className="sidebar-nav"></ul>
            </nav>

            <div className="main">
                <nav className="navbar d-flex align-center jc-sb w-100 px-3">
                    <span
                        className="sidebar-toogle"
                        onClick={() => setCollapseSidebar(!collapseSidebar)}
                    >
                        {collapseSidebar ? <HiMenuAlt3 /> : <HiMenuAlt2 />}
                    </span>
                    <div className="d-flex align-center ">
                        <ChangeLanguage />
                        <ThemeToggle />
                    </div>
                </nav>

                <main className="content px-3">
                    <div className="p-3">
                        <Outlet/>
                    </div>
                </main>

                <footer className="footer px-2">
                    <div className="d-flex align-center gap-3 py-2">
                        <p>
                            @ 2023 - <span>آکادمی Wins</span>
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default MainLayout;
