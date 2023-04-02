import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IElem } from './interfaces/interface';

export const fetchData = createAsyncThunk<
    IElem[] | undefined
    // undefined, {rejectValue: string;}
>('autos/getAutos', async () => {
    try {
        const res = await fetch('MOCK_DATA.json');
        const autos: IElem[] = await res.json();
        return autos;
    } catch (err) {
        console.log(err);
    }
});

interface IAutos {
    items: IElem[];
    loading: 'idle' | 'loading';
    error: null | string;
}

const initialState: IAutos = {
    items: [],
    loading: 'idle',
    error: null,
};

const autosSlice = createSlice({
    name: 'autos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = 'loading';
            })
            .addCase(fetchData.rejected, (state) => {
                state.loading = 'idle';
                state.error = 'Error';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.items = action.payload!;
                state.loading = 'idle';
            });
    },
});

export const autosReducer = autosSlice.reducer;
