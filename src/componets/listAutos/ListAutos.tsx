import { MyContext } from '../pages/Home';
import { useContext } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Auto } from '../auto/Auto';
import Spinner from '../spinner/Spinner';
import { addInBasket } from '../../features/slices/autoBasketSlice';
import Modal from '../modal/Modal';
import { GoodsSwitch } from '../goodsSwitch/GoodsSwitch';
import styles from './listAutos.module.scss';
import { IElem } from '../../features/slices/interfaces/interface';

function ListAutos(): JSX.Element {
    const autos = useAppSelector((state) => state.autos.items);
    const isLoading = useAppSelector((state) => state.autos.loading);
    const auto = useAppSelector((state) => state.autoState.autoState);
    const dispatch = useAppDispatch();

    const { cardsFormat } = useContext(MyContext);

    const classNamesList = cardsFormat
        ? `${styles.listAutos}`
        : `${styles.listAutosTable}`;

    return (
        <div>
            <GoodsSwitch />
            {isLoading === 'loading' ? (
                <Spinner />
            ) : (
                <div className="container">
                    <ul className={classNamesList}>
                        {autos.map((auto) => {
                            return <Auto key={auto.id} auto={auto} />;
                        })}
                    </ul>
                    <Modal
                        header="Modal"
                        closeButton={true}
                        text="Does it add to basket ?"
                        handleBasket={() => {
                            dispatch(addInBasket(auto as IElem));
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export { ListAutos };
