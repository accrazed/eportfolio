import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders title name link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Amelia Castilla/);
    expect(linkElement).toBeInTheDocument();
});
