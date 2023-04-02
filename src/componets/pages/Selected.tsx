import { useAppSelector } from '../../app/hooks';
import ElemSelect from '../elemSelect/ElemSelect';
import styles from './basket.module.scss';
const Selected = (): JSX.Element => {
    const selectedAutos = useAppSelector(
        (state) => state.autoSelected.itemsSelected
    );

    const cartEmpty = (
        <h2 style={{ textAlign: 'center' }}>here are no items</h2>
    );
    return (
        <div className="container">
            {selectedAutos.length !== 0 ? (
                <ul className={styles.listAutos}>
                    {selectedAutos.map((elem) => {
                        return <ElemSelect key={elem.id} auto={elem} />;
                    })}
                </ul>
            ) : (
                cartEmpty
            )}
        </div>
    );
};

export default Selected;
