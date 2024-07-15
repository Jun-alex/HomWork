import { createSlice } from "@reduxjs/toolkit";

const todosStore = createSlice({
    name: "todos",
    initialState: {
        items: [],
        isLoading: false,
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push({ text: action.payload, completed: false });
        },
        setTodos: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        removeTodo: (state, action) => {
            state.items = state.items.filter((_, index) => index !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.items[action.payload];
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        editTodo: (state, action) => {
            const { index, text } = action.payload;
            const todo = state.items[index];
            if (todo) {
                todo.text = text;
            }
        },
        clearTodos: (state) => {
            state.items = [];
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
});

export const {
    addTodo,
    setTodos,
    removeTodo,
    toggleTodo,
    editTodo,
    clearTodos,
    setLoading
} = todosStore.actions;

export default todosStore.reducer;
