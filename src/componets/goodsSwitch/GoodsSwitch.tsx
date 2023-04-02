import { useContext } from 'react';
import { MyContext } from '../pages/Home';
import styles from './goodsSwitch.module.scss';
import { ClickEvent } from '../pages/Home';
export const GoodsSwitch = () => {
    const { cardsFormat, tableFormat, handleFormat } = useContext(MyContext);

    const classNamesCards = cardsFormat
        ? `${styles.switch} ${styles.switchBg}`
        : `${styles.switch}`;
    const classNamesTable = tableFormat
        ? `${styles.switch} ${styles.switchBg}`
        : `${styles.switch}`;

    return (
        <div className="container">
            <div className={styles.wrapSwitch}>
                <div
                    data-format="cards"
                    onClick={(e: ClickEvent) => {
                        handleFormat(e);
                    }}
                    className={`${classNamesCards}`}
                >
                    Cards
                </div>
                <div
                    data-format="table"
                    onClick={(e: ClickEvent) => {
                        handleFormat(e);
                    }}
                    className={`${classNamesTable}`}
                >
                    Table
                </div>
            </div>
        </div>
    );
};
