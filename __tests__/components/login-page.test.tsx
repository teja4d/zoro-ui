// Import necessary modules
import LoginPage from "../../src/app/login/page";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { authenticate } from "../../src/api/auth/auth-api";

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));
// Mock the authenticate function
jest.mock("../../src/api/auth/auth-api");

describe("LoginPage", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear all mock calls after each test
  });

  test("renders login form", () => {
    render(<LoginPage />);
    const loginFormElement = screen.getByRole("form");
    expect(loginFormElement).toBeInTheDocument();
  });

  test("renders login heading", () => {
    render(<LoginPage />);
    const loginHeadingElement = screen.getByRole("heading", { level: 2 });
    expect(loginHeadingElement).toHaveTextContent("Log in");
  });

  test("renders start shopping subheading", () => {
    render(<LoginPage />);
    const subheadingElement = screen.getByRole("heading", { level: 3 });
    expect(subheadingElement).toHaveTextContent("to start shopping");
  });

  test("renders banner if username or password is invalid", async () => {
    (authenticate as jest.Mock).mockResolvedValue({ error: 'Invalid credentials' });
    render(<LoginPage />);
    //get by data-testid
    const usernameInput = screen.getByTestId("username");
    const passwordInput = screen.getByTestId("password");
    const submitButton = screen.getByRole("button");
    //fill in the form
    fireEvent.change(usernameInput, { target: { value: "john" } });
    fireEvent.change(passwordInput, { target: { value: "/" } });
    //submit the form
    fireEvent.click(submitButton);

    await waitFor(() => {
      const bannerElement = screen.getByRole('banner');
      expect(bannerElement).toHaveTextContent('Invalid credentials');
    });
  });

  test("login button click updates button text", async () => {
    render(<LoginPage />);
    const button = screen.getByRole("button");
    await act(async () => {
      fireEvent.click(button);
    });
    expect(button).toHaveTextContent("Login");
  });

  test("shows error message when submitting form with empty fields", async () => {
    render(<LoginPage />);
    await act(async () => {
      fireEvent.click(screen.getByText("Login"));
    });
    await act(async () => {
      expect(await screen.findByRole("banner")).toBeInTheDocument();
    });
  });
});
