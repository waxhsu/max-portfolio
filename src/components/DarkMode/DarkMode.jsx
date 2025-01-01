import React, { useState, useEffect } from "react";
import "./DarkMode.css";
import DarkIcon from "../../images/IconDark.gif"
import LightIcon from "../../images/IconLight.gif"

export default function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("isDarkMode") === "true";
    });

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        const newDarkModeState = !isDarkMode;
        setIsDarkMode(newDarkModeState);
        localStorage.setItem("isDarkMode", newDarkModeState);
    };

    return (
        <div onClick={toggleDarkMode} className="dark-mode-toggle">
            <img 
                src={isDarkMode ? LightIcon : DarkIcon} 
                className="dark-mode-icon"
            />
        </div>
    );
}
