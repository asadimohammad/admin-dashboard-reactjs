// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import usFlag from "../assets/images/usFlag.png";
import faFlag from "../assets/images/iran-flag-round-circle-icon.webp";
import "../assets/styles/changeLanguage.css";
import { useTranslation } from "react-i18next";

const ChangeLanguage = () => {
    const [show, setShow] = useState(false);
    const [language, setLanguage] = useState();
    const ref = useRef();

    const {i18n} = useTranslation()
    const setLangPage = (lang) => {
        i18n.changeLanguage(lang)
        document.dir = lang === 'fa' ? 'rtl' : 'ltr'
        setLanguage(lang);
        setShow(false);
    };

    useEffect(() => {
        document.addEventListener("mousedown", closeUlFlags);
        function closeUlFlags(e) {
            if (show && !ref.current?.contains(e.target)) {
                setShow(false);
            }
        }

        return () => document.removeEventListener("mousedown", closeUlFlags);
    }, [show]);

    return (
        <div className="change-language dropdown p-3">
            <div className="toggle-lang d-flex" onClick={() => setShow(!show)}>
                <img
                    className="flag"
                    src={language === "en" ? usFlag : faFlag}
                    alt=""
                />
            </div>
            {show ? (
                <ul ref={ref} className="dropdown-item p-3">
                    <li
                        className="item d-flex jc-start align-center gap-2 p-1"
                        onClick={() => setLangPage("fa")}
                    >
                        <img className="flag" src={faFlag} alt="" />
                        <span>فارسی</span>
                    </li>
                    <li
                        className="item d-flex jc-start align-center  gap-2 p-1"
                        onClick={() => setLangPage("en")}
                    >
                        <img className="flag" src={usFlag} alt="" />
                        <span>English</span>
                    </li>
                </ul>
            ) : null}
        </div>
    );
};

export default ChangeLanguage;
