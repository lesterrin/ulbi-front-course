import {classNames} from "../../../shared/classNames/classNames";
import cls from './Navbar.module.scss';
import React from "react";
import {AppLink, AppLinkTheme} from "../../../shared/ui/AppLink/AppLink";
import {ThemeSwitcherButton} from "../../ThemeSwitcherButton";

interface INavbarProps {
    className?: string;
}

export const Navbar = ({className}: INavbarProps) => {
    return (
        <div className={classNames(cls.Navbar)}>
            <div className={cls.title}>
                <ThemeSwitcherButton/>
            </div>
            <div className={cls.links}>
                <AppLink to={"/"} theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>Главная</AppLink>
                <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>О сайте</AppLink>
            </div>
        </div>
    );
}