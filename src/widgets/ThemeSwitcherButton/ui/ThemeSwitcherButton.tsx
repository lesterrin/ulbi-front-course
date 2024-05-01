import {classNames} from "../../../shared/classNames/classNames";
import cls from './ThemeSwitcherButton.module.scss';
import {useTheme} from "../../../app/providers/ThemeProvider/lib/useTheme";
import {ReactComponent as LightIcon} from '../../../shared/assets/icons/light_theme.svg';
import {ReactComponent as DarkIcon} from '../../../shared/assets/icons/dark_theme.svg';
import React from "react";
import {Theme} from "../../../app/providers/ThemeProvider";
import {Button} from "../../../shared/ui/Button/Button";

interface IThemeSwitcherButtonProps {
    className?: string;
}

export const ThemeSwitcherButton = ({className = ''}: IThemeSwitcherButtonProps) => {
    const {theme, toggleTheme} = useTheme();
    const iconHeight = 35;
    const iconWidth = 35;

    return (
        <Button className={classNames(cls.ThemeSwithcer, {}, [className])} onClick={toggleTheme}>
            {theme === Theme.LIGHT ?
                <LightIcon height={iconHeight} width={iconWidth}/> :
                <DarkIcon height={iconHeight} width={iconWidth}/>}
        </Button>
    );
}