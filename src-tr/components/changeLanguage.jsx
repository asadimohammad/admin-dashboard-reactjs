// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import usFlag from "#assets/images/usFlag.png";
import faFlag from "#assets/images/iran-flag-round-circle-icon.webp";
import "#assets/styles/changeLanguage.css";
import { useAppContext } from "#context/app/app-context";

const ChangeLanguage = () => {
    const [show, setShow] = useState(false);
    const ref = useRef();
    const{language , changeLanguage} = useAppContext()
    
    useEffect(() => {
        setShow(false)
    } , language)


    useEffect(() => {
        const closeShowLangs = (e) => {
            if (show && !ref.current?.contains(e.target)) {
                setShow(false);
            }
        };

        document.addEventListener("mousedown", closeShowLangs);
        return () => {
            document.removeEventListener("mousedown", closeShowLangs);
        };
    }, [show]);

    return (
        <div className="change-language dropdown p-3">
            <div className="toggle-lang d-flex" onClick={() => setShow(true)}>
                <img className="flag" src={language === 'en' ? usFlag : faFlag} alt="" />
            </div>
            {show ? (
                <ul ref={ref} className="dropdown-item p-3">
                    <li className="item d-flex jc-start align-center gap-2 p-1" onClick={() => changeLanguage('fa')}>
                        <img className="flag" src={faFlag} alt="" />
                        <span>فارسی</span>
                    </li>
                    <li className="item d-flex jc-start align-center  gap-2 p-1" onClick={() => changeLanguage('en')}>
                        <img className="flag" src={usFlag} alt="" />
                        <span>English</span>
                    </li>
                </ul>
            ) : null}
        </div>
    );
};

export default ChangeLanguage;
