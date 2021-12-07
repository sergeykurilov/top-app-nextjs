import {TextAreaProps} from "./TextArea.props";
import cn from 'classnames';
import styles from './TextArea.module.css';
import {ForwardedRef, forwardRef} from "react";

export const TextArea = forwardRef(({className, error, ...props}: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {

    return (
        <div className={cn(className, styles.textareaWrapper)}>
            <textarea ref={ref} className={cn(styles.textarea,  {
                [styles.error]: error
            })} {...props}/>
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});