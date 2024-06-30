import { render, screen } from '@testing-library/react';

import SignupPage from '../../src/app/signup/page';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe('SignupPage', () => {
  test('renders signup form', () => {
    render(<SignupPage />);
    const signupFormElement = screen.getByRole('form');
    expect(signupFormElement).toBeInTheDocument();
  });

  test('renders signup heading', () => {
    render(<SignupPage />);
    const signupHeadingElement = screen.getByRole('heading', { level: 2 });
    expect(signupHeadingElement).toHaveTextContent('Signup');
  });

  test('renders start shopping subheading', () => {
    render(<SignupPage />);
    const subheadingElement = screen.getByRole('heading', { level: 3 });
    expect(subheadingElement).toHaveTextContent('to start shopping');
  });
});
