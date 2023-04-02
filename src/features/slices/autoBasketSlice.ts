import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IElem } from './interfaces/interface';

export interface IBasketState {
    itemsBasket: IElem[];
    isModal: boolean;
}

const initialState: IBasketState = {
    itemsBasket: [],
    isModal: false,
};

const autoBasketSlice = createSlice({
    name: 'autoBasket',
    initialState,
    reducers: {
        addInBasket: (state, action: PayloadAction<IElem>) => {
            const res = state.itemsBasket.findIndex(
                (obj) => obj.id === action.payload.id
            );

            if (res === -1) {
                state.itemsBasket.push({ ...action.payload, quantity: 1 });
                localStorage.setItem(
                    'autosBasket',
                    JSON.stringify([...state.itemsBasket])
                );
            } else if (res) {
                state.itemsBasket[res].quantity =
                    state.itemsBasket[res].quantity! + 1;
                localStorage.setItem(
                    'autosBasket',
                    JSON.stringify([...state.itemsBasket])
                );
            }
        },
        deleteFromBasket: (state, action: PayloadAction<IElem>) => {
            state.itemsBasket = state.itemsBasket.filter(
                (elem) => elem.id !== action.payload.id
            );
            localStorage.setItem(
                'autosBasket',
                JSON.stringify([...state.itemsBasket])
            );
        },
        toggleModalStatus: (state, action: PayloadAction<boolean>) => {
            state.isModal = action.payload;
        },
        setItemsBasket: (state, action: PayloadAction<IElem[]>) => {
            state.itemsBasket = action.payload;
        },

        clearBasket: (state) => {
            localStorage.setItem('autosBasket', [].toString());
            state.itemsBasket = [];
        },
    },
});

export const autoBasketReducer = autoBasketSlice.reducer;
export const {
    addInBasket,
    toggleModalStatus,
    deleteFromBasket,
    setItemsBasket,
    clearBasket,
} = autoBasketSlice.actions;
