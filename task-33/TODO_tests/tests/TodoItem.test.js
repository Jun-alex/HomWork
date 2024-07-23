import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from '../src/App';

test("Состояние компонента TodoItem после клика на checkbox", async () => {
    const { container } = render(<App />);

    await waitFor(() => {
        const loadingText = screen.queryByText("Loading...");
        expect(loadingText).not.toBeInTheDocument();
    }, {timeout: 2000});

    const initialTodoItems = container.querySelectorAll('.todo-item');
    const initialTodoCount = initialTodoItems.length;

    const elementInput = container.querySelector('input[type="text"]');
    const addBtn = screen.getByText(/Добавить/i);

    fireEvent.change(elementInput, { target: { value: 'Забрать машину' } });
    fireEvent.click(addBtn);

    const newTodoItems = await waitFor(() => container.querySelectorAll('.todo-item'));
    expect(newTodoItems.length).toBe(initialTodoCount + 1);

    const addedTodoItem = Array.from(newTodoItems).find(item => {
        const span = item.querySelector('span');
        return span && span.textContent === 'Забрать машину';
    });

    expect(addedTodoItem).toBeInTheDocument();

    const checkbox = addedTodoItem.querySelector('input[type="checkbox"]');
    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(true);
});
