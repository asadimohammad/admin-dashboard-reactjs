// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarNavLink = styled(NavLink)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 16px;

    &:hover {
        background: #252831;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }
    &.active {
        background: var(--third-teal);
    }
`;
const SidebarLink = styled.div`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 16px;

    &:hover {
        background: #252831;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin: 0 16px ;
`;

const DropdownLink = styled(NavLink)`
    background: #364263;
    height: 60px;
    padding-right: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 16px;

    &:hover {
        background: #2f374c;
        cursor: pointer;
    }
`;

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const refNav = useRef();
    useEffect(() => {
        const closeSubNavs = (e) => {
            if (subnav && !e.target.contains(refNav.current)) {
                setSubnav(false);
            }
        };
        document.addEventListener("click", closeSubNavs);
        return () => document.removeEventListener("click", closeSubNavs);
    }, [subnav]);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            {!item.subNav ? (
                <SidebarNavLink to={item.path} state={{title : item.title}} onClick={item.subNav && showSubnav}>
                    <div>
                        {item.icon}
                        <SidebarLabel ref={refNav} >{item.title}</SidebarLabel>
                    </div>
                    <div>
                        {item.subNav && subnav
                            ? item.iconOpened
                            : item.subNav
                            ? item.iconClosed
                            : null}
                    </div>
                </SidebarNavLink>
            ) : (
                <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                    <div>
                        {item.icon}
                        <SidebarLabel ref={refNav}>{item.title}</SidebarLabel>
                    </div>
                    <div>
                        {item.subNav && subnav
                            ? item.iconOpened
                            : item.subNav
                            ? item.iconClosed
                            : null}
                    </div>
                </SidebarLink>
            )}
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <DropdownLink to={item.path} key={index}>
                            {item.icon}
                            <SidebarLabel>{item.title}</SidebarLabel>
                        </DropdownLink>
                    );
                })}
        </>
    );
};

export default SubMenu;
