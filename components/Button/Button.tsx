import styles from  './Button.module.css';
import { ButtonProps } from "./Button.props";
import cn from "classnames";

export const Button = ( { appearence, children, arrow = 'none', className, ...props } : ButtonProps) : JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearence == 'primary',
                [styles.ghost]: appearence == 'ghost'
            })}
            {...props}
        >
            {children}
            {arrow != 'none' && 
                <span 
                className={cn(styles.arrow, {
                            [styles.down]: arrow == 'down'
                })}>
                <img src="arrow.svg" alt="arrow"/>
                </span>}
        </button>
    );
};