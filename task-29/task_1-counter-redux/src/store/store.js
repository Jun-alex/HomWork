import {configureStore, createSlice} from '@reduxjs/toolkit';

const counterStore = createSlice({
    name: "counter",
    initialState: {count: 0},
    reducers: {
        increment: state => {
            state.count += 1;
        },
        decrement: state => {
            state.count -= 1;
        }
    }
});

export const {increment, decrement} = counterStore.actions;

export const store = configureStore({
    reducer: {
        counter: counterStore.reducer
    }
});


