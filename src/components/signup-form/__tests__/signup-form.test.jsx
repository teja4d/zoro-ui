import { render, screen } from '@testing-library/react';
import SignUpForm from '../signup-form'
describe('SignupForm', () => {
  test('renders Signup form', () => {
    render(<SignUpForm />);
    const SignupFormElement = screen.getByTestId('signup-form');
    expect(SignupFormElement).toBeInTheDocument();
  });
  test('renders Signup form with username input', () => {
    render(<SignUpForm />);
    const userInputElement = screen.getByTestId('username');
    expect(userInputElement).toBeInTheDocument();
  });
  test('renders Signup form with password input', () => {
    render(<SignUpForm />);
    const passwordInputElement = screen.getByTestId('password');
    expect(passwordInputElement).toBeInTheDocument();
  });

  test('renders Signup form with email input', () => {
    render(<SignupForm />);
    const passwordInputElement = screen.getByTestId('emailname');
    expect(passwordInputElement).toBeInTheDocument();
  });

  test('renders Signup form with confirm password input', () => {
    render(<SignupForm />);
    const passwordInputElement = screen.getByTestId('password2');
    expect(passwordInputElement).toBeInTheDocument();
  });

  test('renders Signup form with submit button', () => {
    render(<SignupForm />);
    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();
  });

  test('displays the banner with the error text when there is an error', () => {
    jest
      .spyOn(require('react-dom'), 'useFormState')
      .mockImplementation(() => [
        { error: 'Please eneter all details' },
        jest.fn(),
        false,
      ]);
    render(<SignupForm />);
    expect(screen.getByText('Please eneter all details')).toBeInTheDocument();
  });
});
