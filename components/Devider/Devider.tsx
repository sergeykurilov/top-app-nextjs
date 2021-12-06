import {DeviderProps} from "./Devider.props";
import cn from 'classnames';
import styles from './Devider.module.css';

export const Devider = ({className, ...props}: DeviderProps): JSX.Element => {

    return (
        <hr className={cn(className, styles.hr)} {...props}/>
    );
};