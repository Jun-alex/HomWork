import { createSlice } from "@reduxjs/toolkit";

const loadTodos = () => JSON.parse(localStorage.getItem("todos")) || [];

const saveTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: loadTodos(),
        isLoading: false,
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push({ text: action.payload, completed: false });
            saveTodos(state.items);
        },
        setTodos: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
            saveTodos(state.items);
        },
        removeTodo: (state, action) => {
            state.items = state.items.filter((_, index) => index !== action.payload);
            saveTodos(state.items);
        },
        toggleTodo: (state, action) => {
            const todo = state.items[action.payload];
            if (todo) {
                todo.completed = !todo.completed;
                saveTodos(state.items);
            }
        },
        editTodo: (state, action) => {
            const { index, text } = action.payload;
            const todo = state.items[index];
            if (todo) {
                todo.text = text;
                saveTodos(state.items);
            }
        },
        clearTodos: (state) => {
            state.items = [];
            saveTodos(state.items);
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
    setLoading,
} = todosSlice.actions;

export default todosSlice.reducer;

