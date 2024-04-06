import React, {Suspense, useContext, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import "./styles/index.scss";
import MainPageAsync from "./pages/MainPage/MainPageAsync";
import AboutPageAsync from "./pages/AboutPage/AboutPageAsync";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {classNames} from "./helpers/classNames/classNames";

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
                    <Route path={"/"} element={<MainPageAsync/>}/>
                    <Route path={"/about"} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
