import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from "../src/App";

test("Ввести можно цифры и буквы", () => {
    render(<App />);

    const elementInput = screen.getByRole("textbox");
    fireEvent.change(elementInput, { target: { value: "1234567890abcde" } });

    expect(elementInput.value).toBe("1234567890abcde");
});


test("Ошибка 'Добавить' без текста", async () => {
    render(<App />);

    const addBtn = screen.getByText(/Добавить/i);
    fireEvent.click(addBtn);

    const errorMessage = await waitFor(() => screen.getByText(/Поле не может быть пустым/i));

    expect(errorMessage).toBeInTheDocument();
});
