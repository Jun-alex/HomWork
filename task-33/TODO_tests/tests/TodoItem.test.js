import React from 'react';
import store from "../src/store/store";
import {addTodo} from "../src/store/todosStore";
import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {TodoItem} from "../src/components/TodoItem";

test("Cостояние компонента TodoItem", () => {
    const todo = {text: "Забрать машину", completed: false};
    store.dispatch(addTodo(todo.text));

    render(
        <Provider store={store}>
            <TodoItem text={todo.text} completed={todo.completed} index={0}/>
        </Provider>
    );

    const textTodo = screen.getByText(todo.text);
    expect(textTodo).toBeInTheDocument();

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(true);
});

