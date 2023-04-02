import { AiFillStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { toggleSelected } from '../../features/slices/autoSelectedSlice';
import { IElem } from '../../features/slices/interfaces/interface';
import styles from './elemSelect.module.scss';

const ElemSelect = ({ key, auto }: { key: number; auto: IElem }) => {
    const { name, price, img, color } = auto;
    const dispatch = useDispatch();
    return (
        <li className={styles.elemSelect}>
            <div>
                <img className={styles.img} src={img} alt="auto" />
            </div>
            <div>
                <h4>{name}</h4>
                <p>Color: {color}</p>
            </div>
            <div>
                <h5>Price: {price}$</h5>
            </div>

            <div>
                <AiFillStar
                    className={styles.activeStarS}
                    onClick={(e) => {
                        dispatch(toggleSelected(auto));
                    }}
                />
            </div>
        </li>
    );
};

export default ElemSelect;
