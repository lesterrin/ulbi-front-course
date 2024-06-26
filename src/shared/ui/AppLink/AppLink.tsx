import {classNames} from "../../../shared/classNames/classNames";
import cls from './AppLink.module.scss';
import React, {FC, ReactNode} from "react";
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface IAppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    theme?: AppLinkTheme;
}

export const AppLink: FC<IAppLinkProps> = (props) => {
    const {to, className = '', children, theme = AppLinkTheme.PRIMARY, ...otherProps} = props;
    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
}