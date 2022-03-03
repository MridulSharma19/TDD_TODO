import { fireEvent, render, screen } from "@testing-library/react";
import NewTaskInput from "@/components/homepage/newTaskInput";

describe("New Task", () => {
    it("has an input", () => {
        const handleClick = jest.fn();

        render(<NewTaskInput handleAdd={handleClick} />);

        const input = screen.getByRole("textbox", {
            name: "New Task",
        });

        expect(input).toBeInTheDocument();
    });

    it("input value changes", () => {
        const handleClick = jest.fn();

        render(<NewTaskInput handleAdd={handleClick} />);

        const input = screen.getByLabelText("New Task");
        fireEvent.change(input, { target: { value: "eat" } });
        expect(input.value).toBe("eat");
    });

    it("has a button", () => {
        const handleClick = jest.fn();

        render(<NewTaskInput handleAdd={handleClick} />);

        const button = screen.getByRole("button", { name: "Add Task" });

        expect(button).toBeInTheDocument();
    });

    it("button doesn't work on empty input", () => {
        const handleClick = jest.fn();

        render(<NewTaskInput handleAdd={handleClick} />);

        const button = screen.getByRole("button", { name: "Add Task" });

        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(0);
    });

    it("button doesn't work on empty input", () => {
        const handleClick = jest.fn();

        render(<NewTaskInput handleAdd={handleClick} />);

        const button = screen.getByRole("button", { name: "Add Task" });

        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(0);
    });
    it("button works with non empty input", () => {
        const handleClick = jest.fn();

        render(<NewTaskInput handleAdd={handleClick} />);

        const input = screen.getByLabelText("New Task");

        fireEvent.change(input, { target: { value: "eat" } });

        const button = screen.getByRole("button", { name: "Add Task" });

        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
