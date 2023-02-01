import { ForwardedRef, forwardRef } from 'react';
import styles from  './Textarea.module.css';
import { TextAreaProps } from "./Textarea.props";
import cn from "classnames";

export const Textarea = forwardRef(( { error, className, ...props} : TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement> ) : JSX.Element => {
    return (
        <div className={cn(className, styles.textareaWrapper)}>
            <textarea className={cn(styles.textarea, {
                [styles.error]: error
            })} 
            ref={ref} 
            {...props}/>
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});