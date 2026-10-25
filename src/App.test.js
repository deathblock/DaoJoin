// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DaoJoin title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DaoJoin/i);
    expect(titleElement).toBeInTheDocument();
});
