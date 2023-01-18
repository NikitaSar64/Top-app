import { priceRu } from '../../helpers/helpers';
import { Card } from '../Card/Card';
import styles from  './HhData.module.css';
import { HhDataProps } from "./HhData.props";
import RateIcon from './rate.svg';

export const HhData = ( { count, juniorSalary, seniorSalary, middleSalary} : HhDataProps) : JSX.Element => {
    return (
        <div className={styles.hh}>
            <Card className={styles.count} color='white'>
                <div className={styles.title}>Всего вакансии</div>
                <div className={styles.countValue}>{count}</div>
            </Card>
            <Card className={styles.salary} color='white'>
                <div>
                    <div className={styles.title}>Начальный</div>
                    <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled}/>
                        <RateIcon/>
                        <RateIcon/>
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Средний</div>
                    <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled}/>
                        <RateIcon className={styles.filled}/>
                        <RateIcon/>
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Профессионал</div>
                    <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled}/>
                        <RateIcon className={styles.filled}/>
                        <RateIcon className={styles.filled}/>
                    </div>
                </div>
            </Card>
        </div>
    );
};