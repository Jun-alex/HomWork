import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from '../src/App';

test("Состояние компонента TodoItem через App", async () => {
    const { container } = render(<App />);

    await waitFor(() => {
        const loadingText = screen.queryByText("Loading...");
        expect(loadingText).not.toBeInTheDocument();
    }, {timeout: 2000});

    const elementInput = container.querySelector('input');
    const addBtn = screen.getByText(/Добавить/i);

    fireEvent.change(elementInput, { target: { value: 'Забрать машину' } });
    fireEvent.click(addBtn);

    const textTodoItems = await waitFor(() => screen.getAllByText('Забрать машину'));

    expect(textTodoItems.length).toBe(1);
    expect(textTodoItems[0]).toBeInTheDocument();

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(true);
});
