import {RatingProps} from "./Rating.props";
import cn from 'classnames';
import styles from './Rating.module.css';
import StarIcon from './star.svg';
import {useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef} from "react";

export const Rating = forwardRef(({isEditable = false, rating = 0, setRating,error, children, ...props}: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));


    useEffect(() => {
        constructRating(rating);
    }, [rating]);


    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    onClick={() => onClick(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    className={cn(styles.star, {
                        [styles.fill]: i < currentRating,
                        [styles.editable]: isEditable
                    })}
                >
                    <StarIcon
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
                        tabIndex={isEditable ? 0 : -1} />
                </span>
            );
        });
        setRatingArray(updatedArray);
    };


    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if(e.code !== 'Space' || !setRating){
            return;
        }
        setRating(i);
    };

    const onClick = (i: number) => {
        if(!isEditable || !setRating) return;
        setRating(i);
    };

    const changeDisplay = (i: number) => {
        if(!isEditable) return;
        constructRating(i);
    };

    return (
        <div className={cn(styles.ratingWrapper, {
            [styles.error]: error
        })} {...props} ref={ref}>
            {ratingArray.map((r, i) => {
                return <span key={i}>{r}</span>;
            })}
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});