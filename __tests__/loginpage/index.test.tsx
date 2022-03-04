import LoginPage from "@/components/loginpage/loginpage";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Login Page", () => {
    it("renders a heading", () => {
        const handleClick = jest.fn();
        render(<LoginPage setName={handleClick} />);

        const heading = screen.getByRole("heading", {
            name: "TODO APP",
        });

        expect(heading).toBeInTheDocument();
    });

    it("renders a subheading", () => {
        const handleClick = jest.fn();
        render(<LoginPage setName={handleClick} />);

        const heading = screen.getByRole("heading", {
            name: "Please enter your name",
        });

        expect(heading).toBeInTheDocument();
    });

    it("has an input", () => {
        const handleClick = jest.fn();

        render(<LoginPage setName={handleClick} />);

        const input = screen.getByPlaceholderText("Your name");

        expect(input).toBeInTheDocument();
    });

    it("input value changes", () => {
        const handleClick = jest.fn();

        render(<LoginPage setName={handleClick} />);

        const input = screen.getByPlaceholderText("Your name");
        fireEvent.change(input, { target: { value: "eat" } });
        expect(input.value).toBe("eat");
    });

    it("has a button", () => {
        const handleClick = jest.fn();

        render(<LoginPage setName={handleClick} />);

        const button = screen.getByRole("button", { name: "Get Started" });

        expect(button).toBeInTheDocument();
    });

    it("button doesn't work on empty input", () => {
        const handleClick = jest.fn();

        render(<LoginPage setName={handleClick} />);

        const button = screen.getByRole("button", { name: "Get Started" });

        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(0);
    });

    it("button works with non empty input", () => {
        const handleClick = jest.fn();

        render(<LoginPage setName={handleClick} />);

        const input = screen.getByPlaceholderText("Your name");

        fireEvent.change(input, { target: { value: "eat" } });

        const button = screen.getByRole("button", { name: "Get Started" });

        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("returned input is trimmed", () => {
        let output = "";

        const handleClick = (input: string) => {
            output = input;
        };

        render(<LoginPage setName={handleClick} />);

        const input = screen.getByPlaceholderText("Your name");

        fireEvent.change(input, { target: { value: "eat      " } });

        const button = screen.getByRole("button", { name: "Get Started" });

        fireEvent.click(button);

        expect(output).toBe("eat");
    });
});
