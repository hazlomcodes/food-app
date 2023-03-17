import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App';

describe('App component', () => {
  test('renders "Donate Now" button', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const donateButton = screen.getByRole('link', { name: /Donate Now/i });
    expect(donateButton).toBeInTheDocument();
  });

  test('renders "Sign Up Now" button', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const signUpButton = screen.getByRole('link', { name: /Sign Up Now/i });
    expect(signUpButton).toBeInTheDocument();
  });
});
