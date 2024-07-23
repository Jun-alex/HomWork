import React from 'react';
import { render, screen } from '@testing-library/react';
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

test('Страница имеет заголовок TODO', () => {
    renderWithProvider(<App />);

    const headingElements = screen.getAllByText(/TODO/i);
    expect(headingElements[0]).toBeInTheDocument();
});

