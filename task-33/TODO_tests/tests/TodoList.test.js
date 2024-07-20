import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../src/store/store";
import { TodoList } from "../src/components/TodoList";
import { TodoInput } from "../src/components/TodoInput";

test("Hовый элемент после ввода текста и клика 'Добавить'", () => {
    render(
        <Provider store={store}>
            <TodoInput />
            <TodoList />
        </Provider>
    );

    const elementInput  = screen.getByRole("textbox");
    const addBtn = screen.getByText(/Добавить/i);

    fireEvent.change(elementInput , {target: {value: "Новый Todo"}});
    fireEvent.click(addBtn);

    const newTodo = screen.getByText("Новый Todo");
    expect(newTodo).toBeInTheDocument();
});

