import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {App} from "../src/App";

test('Страница имеет заголовок TODO', () => {
    render(<App/>);

    const headingElements = screen.getAllByText(/TODO/i);
    expect(headingElements[0]).toBeInTheDocument();
});
