import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IElem } from './interfaces/interface';

interface AutoState {
    autoState: IElem | {};
}

const initialState: AutoState = {
    autoState: {} as IElem,
};

const autoStateSlice = createSlice({
    name: 'autoState',
    initialState,
    reducers: {
        addAutoState: (state, action: PayloadAction<IElem>) => {
            state.autoState = action.payload;
        },
    },
});

export const autoStateReducer = autoStateSlice.reducer;
export const { addAutoState } = autoStateSlice.actions;
