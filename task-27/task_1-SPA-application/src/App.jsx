import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {Header} from "./compoonents/Header.jsx";
import {HomePage} from "./pages/HomePage.jsx";
import {Contacts} from "./pages/Contacts.jsx";
import {AboutMe} from "./pages/AboutMe.jsx";
import ErrorBoundary from "./compoonents/ErrorBoundary.jsx";

export function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.className = darkMode ? "dark-mode" : "light-mode";
    }, [darkMode]);


    return (
        <ErrorBoundary>
            <Header/>
            <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "Светлая тема" : "Тёмная Тема"}
            </button>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/about" element={<AboutMe/>}/>
            </Routes>
        </ErrorBoundary>
    );
}


