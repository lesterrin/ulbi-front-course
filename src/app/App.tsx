import React, {Suspense, useContext, useState} from 'react';
import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import "./styles/index.scss";import {Theme, ThemeContext} from "./providers/ThemeProvider/lib/ThemeContext";
import {AppRouter} from "./providers/router";
import {classNames} from "../shared/classNames/classNames";

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
            <AppRouter/>
        </div>
    );
}

export default App;
