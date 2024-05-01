import {classNames} from "../../../shared/classNames/classNames";
import cls from './Button.module.scss';
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR = 'clear',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<IButtonProps> = (props) => {
    const {
        className = '',
        theme = '',
        children,
        ...otherProps
    } = props;
    return (
        <button className={classNames(cls.Button, {}, [className, cls[theme]])}
                {...otherProps}>
            {children}
        </button>
    );
}