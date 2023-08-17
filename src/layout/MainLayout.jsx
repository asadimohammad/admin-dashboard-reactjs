import React, { useState } from "react";
import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";
import ChangeTheme from "../components/change-theme";
import ChangeLanguage from "../components/change-language";
import { Link, Outlet } from "react-router-dom";
import "#assets/styles/mainLayout.css";
import logoDash from "#assets/images/logo.webp";
// import {MdKeyboardArrowDown} from 'react-icons/md'
// import {MdKeyboardArrowUp} from 'react-icons/md'

import styled from "styled-components";
// import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../components/MenuItems/SideBarData";
import SubMenu from "../components/MenuItems/SubMenu";
import { IconContext } from "react-icons/lib";


const SidebarNav = styled.nav`
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position : relative;
    top: 0;
    right: 0 ;
    transition: 350ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const MainLayout = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const [collapseSidebar, setCollapseSidebar] = useState(false);
    return (
        <div className="main-layout wrraper d-flex ">
            <nav className={`sidebar ${sidebar ? "collapsed" : ""}`}>
                <Link
                    to="/"
                    className="sidebar-logo d-flex flex-col align-center"
                >
                    <img src={logoDash} alt="" />
                    <h3>داشبورد مدیریت دوره ها</h3>
                </Link>

                {/* main sub menu */}

                <IconContext.Provider value={{ color: "#fff" }}>
                    <SidebarNav>
                        <SidebarWrap>
                            {SidebarData.map((item, index) => {
                                return <SubMenu item={item} key={index} />;
                            })}
                        </SidebarWrap>
                    </SidebarNav>
                </IconContext.Provider>
            </nav>

            <div className="main">
                <nav className="navbar d-flex align-center jc-sb w-100 px-3">
                    <span
                        className="sidebar-toogle"
                        onClick={showSidebar}
                        // onClick={() => setCollapseSidebar(!collapseSidebar)}
                    >
                        {sidebar ? <HiMenuAlt3 /> : <HiMenuAlt2 />}
                    </span>
                    <div className="d-flex align-center ">
                        <ChangeLanguage />
                        <ChangeTheme />
                    </div>
                </nav>

                <main className="content px-3">
                    <div className="p-3">
                        <Outlet />
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
