import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import store from "../src/store/store";
import { TodoInput } from "../src/components/TodoInput";

test("Ввести можно цифры и буквы", () => {
    render(
        <Provider store={store}>
            <TodoInput />
        </Provider>
    );

    const elementInput = screen.getByRole("textbox");
    fireEvent.change(elementInput, { target: { value: "1234567890abcde" } });

    expect(elementInput.value).toBe("1234567890abcde");
});

test("Ошибка 'Добавить' без текста", () => {
    render(
        <Provider store={store}>
            <TodoInput />
        </Provider>
    )

    const addBtn = screen.getByText(/Добавить/i);
    fireEvent.click(addBtn);

    const elementInput = screen.getByRole("textbox");
    expect(elementInput.value).toBe("");
});

