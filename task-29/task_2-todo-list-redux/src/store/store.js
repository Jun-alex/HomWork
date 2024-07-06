import {configureStore, createSlice} from "@reduxjs/toolkit";

const todoStore = createSlice({
    name: "todos",
    initialState: {
        items: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push({text: action.payload});
        }
    }
});

export const {addTodo} = todoStore.actions;

export const store = configureStore({
    reducer: {
        todos: todoStore.reducer,
    }
});


