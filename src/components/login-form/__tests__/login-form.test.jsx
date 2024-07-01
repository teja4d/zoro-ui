import { render, screen } from '@testing-library/react';
import LoginForm from '../login-form';

describe('LoginForm', () => {
  test('renders login form', () => {
    render(<LoginForm />);
    const loginFormElement = screen.getByTestId('login-form');
    expect(loginFormElement).toBeInTheDocument();
  });
  test('renders login form with username input', () => {
    render(<LoginForm />);
    const userInputElement = screen.getByTestId('username');
    expect(userInputElement).toBeInTheDocument();
  });
  test('renders login form with password input', () => {
    render(<LoginForm />);
    const passwordInputElement = screen.getByTestId('password');
    expect(passwordInputElement).toBeInTheDocument();
  });

  test('renders login form with submit button', () => {
    render(<LoginForm />);
    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();
  });

  test('displays the banner with the error text when there is an error', () => {
    jest
      .spyOn(require('react-dom'), 'useFormState')
      .mockImplementation(() => [
        { error: 'Invalid credentials' },
        jest.fn(),
        false,
      ]);
    render(<LoginForm />);
    expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
  });
});
