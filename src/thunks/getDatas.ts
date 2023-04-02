import { setItemsSelected } from '../features/slices/autoSelectedSlice';
import { setItemsBasket } from '../features/slices/autoBasketSlice';
import { Dispatch } from 'redux';
export const getDatas =
    () =>
    (dispatch: Dispatch): void => {
        const selectAutosStorage = localStorage.getItem('selectAutos');

        if (selectAutosStorage) {
            dispatch(setItemsSelected(JSON.parse(selectAutosStorage)));
        }
        const basketAutosStorage = localStorage.getItem('autosBasket');
        if (basketAutosStorage) {
            dispatch(setItemsBasket(JSON.parse(basketAutosStorage)));
        }
    };
