import styles from  './Sort.module.css';
import { SortProps, SortEmun } from "./Sort.props";
import cn from "classnames";
import SortIcon from './sort.svg';

export const Sort = ( { sort, setSort, className, ...props} : SortProps ) : JSX.Element => {
    return (
        <div className={cn(styles.sort, className)} {...props}>
            <span
                onClick={() => setSort(SortEmun.Rating)}
                className={cn({
                    [styles.active]: sort == SortEmun.Rating 
                })}
            >
                <SortIcon className={styles.sortIcon}/>По рейтингу
            </span>
            <span
                onClick={() => setSort(SortEmun.Price)}
                className={cn({
                    [styles.active]: sort == SortEmun.Price
                })}
            >
                <SortIcon className={styles.sortIcon}/>По цене
            </span>
        </div>
    );
};