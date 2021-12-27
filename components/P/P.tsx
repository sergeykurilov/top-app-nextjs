import {PProps} from "./P.props";
import cn from 'classnames';
import styles from './P.module.css';

export const P = ({size = 'small' ,children, className, ...props}: PProps): JSX.Element => {
    //
    return (
        <p
            className={cn(styles.p, className, {
                [styles.small]: size === 'small',
                [styles.medium]: size === 'medium',
                [styles.large]: size === 'large',
            })}
            {...props}
        >
            {children}
        </p>
    );
};