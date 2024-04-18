import React, {Suspense, useContext, useState} from 'react';
import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import "./styles/index.scss";
import {classNames} from "../helpers/classNames/classNames";
import {AboutPage} from "../pages/AboutPage/";
import {MainPage} from "../pages/MainPage/";
import {Theme, ThemeContext} from "./providers/ThemeProvider/lib/ThemeContext";

function App() {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    }

    return (
        <div className={classNames('app', {hovered: true, selected: false}, [theme, 'cls2'])}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/about"} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
