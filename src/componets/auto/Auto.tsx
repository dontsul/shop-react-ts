import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { AiFillStar } from 'react-icons/ai';
import { toggleSelected } from '../../features/slices/autoSelectedSlice';
import { toggleModalStatus } from '../../features/slices/autoBasketSlice';
import { addAutoState } from '../../features/slices/autoStateSlice';
import { IElem } from '../../features/slices/interfaces/interface';
import styles from './auto.module.scss';

function Auto({ key, auto }: { key: number; auto: IElem }) {
    const dispatch = useAppDispatch();
    const selectedAutos = useAppSelector(
        (state) => state.autoSelected.itemsSelected
    );

    const { id, name, price, img, color } = auto;

    const res = selectedAutos.findIndex((obj) => obj.id === id);

    let classes = styles.star;
    if (res === -1) {
        classes = styles.star;
    } else {
        classes = styles.star + ' ' + styles.activeStar;
    }

    return (
        <li>
            <div
                className="card"
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                <div className="card-image">
                    <img
                        src={img}
                        style={{ maxWidth: '100%', height: '200px' }}
                        alt={name}
                    />
                </div>
                <div className="card-content" style={{ flexGrow: '1' }}>
                    <span className="card-title">{name}</span>
                    <span>Color: {color}</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora, earum.
                    </p>
                    <div className={styles.wrapFoot}>
                        <AiFillStar
                            onClick={() => {
                                dispatch(toggleSelected(auto));
                            }}
                            className={classes}
                        />{' '}
                        <span className={styles.price}>${price}</span>
                        <button
                            onClick={() => {
                                dispatch(toggleModalStatus(true));
                                dispatch(addAutoState(auto));
                            }}
                            className="waves-effect waves-light btn"
                        >
                            Add to basket
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
}

export { Auto };
