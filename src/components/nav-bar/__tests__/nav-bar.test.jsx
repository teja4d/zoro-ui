import { render, screen } from '@testing-library/react';
import Navbar from '../nav-bar';

describe('Navbar', () => {
  test('renders the navbar with correct links', () => {
    render(<Navbar />);

    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  test('renders the navbar with ZORO UK logo', () => {
    render(<Navbar />);

    const logo = screen.getByRole('link', { name: /zoro uk/i });

    expect(logo).toBeInTheDocument();
  });
});
