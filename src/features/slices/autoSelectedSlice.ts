import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IElem } from './interfaces/interface';

export interface ISelectedState {
    itemsSelected: IElem[];
}

const initialState: ISelectedState = {
    itemsSelected: [],
};

const autoSelectedSlice = createSlice({
    name: 'autoSelected',
    initialState,
    reducers: {
        toggleSelected: (state, action: PayloadAction<IElem>) => {
            const res = state.itemsSelected.findIndex(
                (obj) => obj.id === action.payload.id
            );
            if (res === -1) {
                state.itemsSelected.push(action.payload);
            } else {
                state.itemsSelected = state.itemsSelected.filter(
                    (auto) => auto.id !== action.payload.id
                );
            }
            localStorage.setItem(
                'selectAutos',
                JSON.stringify([...state.itemsSelected])
            );
        },
        setItemsSelected: (state, action: PayloadAction<IElem[]>) => {
            state.itemsSelected = action.payload;
        },
    },
});

export const autoSelectedReducer = autoSelectedSlice.reducer;
export const { toggleSelected, setItemsSelected } = autoSelectedSlice.actions;
