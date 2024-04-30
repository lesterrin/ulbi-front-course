import React, {Suspense, useContext, useState} from 'react';
import './App.css';
import "./styles/index.scss";
import {AppRouter} from "./providers/router";
import {classNames} from "../shared/classNames/classNames";
import {useTheme} from "./providers/ThemeProvider/lib/useTheme";
import {Navbar} from "../widgets/Navbar";

function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {hovered: true, selected: false}, [theme, 'cls2'])}>
            <Navbar/>
            <button onClick={toggleTheme}>Сменить тему</button>
            <AppRouter/>
        </div>
    );
}

export default App;
