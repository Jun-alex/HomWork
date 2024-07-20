import React from 'react';
import { Provider } from "react-redux";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from "../src/App";
import store from "../src/store/store";

test('Страница имеет заголовок TODO', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    const headingElement = screen.getAllByText(/TODO/i);

    expect(headingElement[0]).toBeInTheDocument();
});

