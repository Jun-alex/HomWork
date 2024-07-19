import React from 'react';
import { Provider } from "react-redux";
import { render, screen } from '@testing-library/react';
import { App } from "../src/App";
import store from "../src/store/store";

test('Страница имеет заголовок TODO', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    const headingElement = screen.getByText(/TODO/i);

    expect(headingElement).toBeInTheDocument();
});

