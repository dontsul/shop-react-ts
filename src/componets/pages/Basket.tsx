import Modal from '../modal/Modal';
import ElemBasket from '../elemBasket/ElemBasket';
import styles from './basket.module.scss';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    deleteFromBasket,
    toggleModalStatus,
} from '../../features/slices/autoBasketSlice';
import { CustomForm } from '../customForm/CustomForm';
import { IElem } from '../../features/slices/interfaces/interface';

const Basket = (): JSX.Element => {
    const cartEmpty = <h2 style={{ textAlign: 'center' }}>Cart is empty</h2>;
    const autosBasket = useAppSelector((state) => state.autoBasket.itemsBasket);

    const dispatch = useAppDispatch();
    const auto = useAppSelector((state) => state.autoState.autoState);

    return (
        <div className="container">
            <div>
                <div>
                    {autosBasket.length !== 0 ? (
                        <ul className={styles.listAutos}>
                            {autosBasket.map((elem) => {
                                return <ElemBasket key={elem.id} auto={elem} />;
                            })}
                        </ul>
                    ) : (
                        cartEmpty
                    )}

                    {
                        <Modal
                            header="Modal"
                            closeButton={true}
                            text="
                            Are you sure you want to delete this element?"
                            // viewModal={() => toggleModalStatus(true)}
                            handleBasket={() => {
                                dispatch(deleteFromBasket(auto as IElem));
                            }}
                        />
                    }
                </div>
                <div>
                    <CustomForm />
                </div>
            </div>
        </div>
    );
};

export default Basket;
