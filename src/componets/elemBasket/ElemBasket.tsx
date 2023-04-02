import { MdDelete } from 'react-icons/md';
import { toggleModalStatus } from '../../features/slices/autoBasketSlice';
import { useAppDispatch } from '../../app/hooks';
import { addAutoState } from '../../features/slices/autoStateSlice';
import { IElem } from '../../features/slices/interfaces/interface';
import styles from './elemBasket.module.scss';

const ElemBasket = ({ key, auto }: { key: number; auto: IElem }) => {
    const dispatch = useAppDispatch();
    const { name, price, img, color, quantity = 0 } = auto;
    return (
        <li className={styles.elemBasket}>
            <div>
                <img className={styles.img} src={img} alt="auto" />
            </div>
            <div>
                <h4 className={styles.title}>{name}</h4>
                <p>Color: {color}</p>
            </div>
            <div>
                <p className={styles.text}>Price: {price}$</p>
            </div>
            <div>
                <p className={styles.text}>Quantity: {quantity}</p>
            </div>
            <div>
                <MdDelete
                    className={styles.icon}
                    onClick={() => {
                        dispatch(toggleModalStatus(true));
                        dispatch(addAutoState(auto));
                    }}
                />
            </div>
        </li>
    );
};

export default ElemBasket;
