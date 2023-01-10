import styles from  './Textarea.module.css';
import { TextAreaProps } from "./Textarea.props";
import cn from "classnames";

export const Textarea = ( { className, ...props} : TextAreaProps ) : JSX.Element => {
    return (
        <textarea className={cn(className, styles.input)} {...props}/>
    );
};