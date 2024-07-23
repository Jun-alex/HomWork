import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import { App } from '../src/App';

test("Hовый элемент после ввода текста и клика 'Добавить'", async () => {
    const { container } = render(<App />);

    const loadingText = screen.getByText("Loading...");
    expect(loadingText).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText("Забрать машину")).toBeInTheDocument(), {
        timeout: 2000,
    });

    const elementInput = container.querySelector('input');
    const addBtn = screen.getByText(/Добавить/i);

    fireEvent.change(elementInput, { target: { value: 'Новый Todo' } });
    fireEvent.click(addBtn);

    expect(screen.getByText('Новый Todo')).toBeInTheDocument()
});
