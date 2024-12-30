import React, { useState, useEffect } from "react";
import "./DarkMode.css";

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
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {isDarkMode ? "LIGHT ICON" : "DARK ICON"}
        </button>
    );
}
