import { render, screen } from '@testing-library/react';
import SignUpButton from '../signup-button';

describe('SignUpButton', () => {
  test('renders a button with the label "Login"', () => {
    render(<SignUpButton />);
    expect(screen.getByRole('button')).toHaveTextContent('Signup');
  });

  test('renders a button with the type "submit"', () => {
    render(<SignUpButton />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  test('renders a button with disabled state', () => {
    jest.spyOn(require('react-dom'), 'useFormStatus').mockImplementation(() => {
      return { pending: true };
    });
    render(<SignUpButton />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('renders a button without disabled state', () => {
    jest.spyOn(require('react-dom'), 'useFormStatus').mockImplementation(() => {
      return { pending: false };
    });
    render(<SignUpButton />);
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  test('renders a button with the label "Loading..." when pending', () => {
    jest.spyOn(require('react-dom'), 'useFormStatus').mockImplementation(() => {
      return { pending: true };
    });
    render(<SignUpButton />);
    expect(screen.getByRole('button')).toHaveTextContent('Loading...');
  });
});
