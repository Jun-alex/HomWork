import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import store from "../src/store/store";
import { App } from "../src/App";

const renderWithProvider = (component) => {
    return render(
        <Provider store={store}>
            {component}
        </Provider>
    );
};

test("Ввести можно цифры и буквы", () => {
    renderWithProvider(<App />);

    const elementInput = screen.getByRole("textbox");
    fireEvent.change(elementInput, { target: { value: "1234567890abcde" } });

    expect(elementInput.value).toBe("1234567890abcde");
});

test("Ошибка 'Добавить' без текста", async () => {
    renderWithProvider(<App />);

    const addBtn = screen.getByText(/Добавить/i);
    fireEvent.click(addBtn);

    const errorMessage = await waitFor(() => screen.getByText(/Поле не может быть пустым/i));
    expect(errorMessage).toBeInTheDocument();
});
