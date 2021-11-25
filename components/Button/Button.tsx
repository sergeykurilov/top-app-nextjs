import {ButtonProps} from "./Button.props";
import cn from 'classnames';
import styles from './Button.module.css';
import ArrowIcon from './arrow.svg';

export const Button = ({appearance, arrow = 'none', children, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance === 'primary',
                [styles.ghost]: appearance === 'ghost'
            })}
            {...props}
        >
            {children}
            {arrow !== 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow === 'down',
                [styles.up]: arrow === 'right',
            })}>
                <ArrowIcon/>
            </span>}
        </button>
    );
};