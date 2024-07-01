import { render, screen } from '@testing-library/react';
import LoginButton from '../login-button';

describe('LoginButton', () => {
  test('renders a button with the label "Login"', () => {
    render(<LoginButton />);
    expect(screen.getByRole('button')).toHaveTextContent('Login');
  });

  test('renders a button with the type "submit"', () => {
    render(<LoginButton />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  test('renders a button with disabled state', () => {
    jest.spyOn(require('react-dom'), 'useFormStatus').mockImplementation(() => {
      return { pending: true };
    });
    render(<LoginButton />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('renders a button without disabled state', () => {
    jest.spyOn(require('react-dom'), 'useFormStatus').mockImplementation(() => {
      return { pending: false };
    });
    render(<LoginButton />);
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  test('renders a button with the label "Loading..." when pending', () => {
    jest.spyOn(require('react-dom'), 'useFormStatus').mockImplementation(() => {
      return { pending: true };
    });
    render(<LoginButton />);
    expect(screen.getByRole('button')).toHaveTextContent('Loading...');
  });
});
