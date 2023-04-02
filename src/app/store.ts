import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { autosReducer } from '../features/slices/autosSlice';
import { autoSelectedReducer } from '../features/slices/autoSelectedSlice';
import { autoBasketReducer } from '../features/slices/autoBasketSlice';
import { autoStateReducer } from '../features/slices/autoStateSlice';

export const store = configureStore({
    reducer: {
        autos: autosReducer,
        autoSelected: autoSelectedReducer,
        autoBasket: autoBasketReducer,
        autoState: autoStateReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
