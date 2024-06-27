import InputField from "../../src/elements/input-fields/input-field";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("InputField", () => {
  test("renders input field with label", () => {
    render(
      <InputField
        label="Username"
        type="text"
        id="username"
        value=""
        onChange={() => {}}
      />
    );
    const inputElement = screen.getByLabelText("Username");
    expect(inputElement).toBeInTheDocument();
  });

  test("calls onChange handler when input value changes", () => {
    const handleChange = jest.fn();
    render(
      <InputField
        label="Username"
        type="text"
        id="username"
        value=""
        onChange={handleChange}
      />
    );
    const inputElement = screen.getByLabelText("Username");
    fireEvent.change(inputElement, { target: { value: "john" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("displays error message when error prop is provided", () => {
    render(
      <InputField
        label="Username"
        type="text"
        id="username"
        value=""
        onChange={() => {}}
        error="Invalid username"
      />
    );
    const errorElement = screen.getByText("Invalid username");
    expect(errorElement).toBeInTheDocument();
  });
});
