import {useContext} from "react";
import {Theme, ThemeContext} from "./ThemeContext";

export const useTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    }

    return {theme, toggleTheme};
}